// This imports the Angular tools needed to create a service.
import { Injectable } from '@angular/core';

// This imports the Angular tool needed to make HTTP requests.
import { HttpClient } from '@angular/common/http';

// This imports Subject from rxjs.
// A Subject lets this service notify components when something changes.
import { Subject } from 'rxjs';

// This imports the Contact model.
// The model defines the structure of a contact object.
import { Contact } from './contact.model';

// This imports the local NodeJS API address used by this application.
import { DATABASE_URL } from '../shared/database-config';

// This decorator tells Angular that this class is a service.
@Injectable({
  // providedIn root means Angular creates one shared copy of this service for the whole app.
  providedIn: 'root',
})

// This service manages the contact data for the application.
export class ContactService {
  // This Subject is used for cross-component communication.
  // When a contact is selected, this event sends that contact to the components listening to it.
  contactSelectedEvent = new Subject<Contact>();

  // This Subject tells the contact list when the contacts array has changed.
  // It sends a new copy of the list after a contact is added, updated, or deleted.
  contactListChangedEvent = new Subject<Contact[]>();

  // This array stores the main list of contacts.
  contacts: Contact[] = [];

  // This is the URL used for contact requests sent to the local server.
  private contactsUrl = `${DATABASE_URL}/contacts`;

  // The constructor runs when Angular creates this service.
  constructor(private http: HttpClient) {}

  // This method returns a copy of the contact list.
  getContacts(): Contact[] {
    // Get the contacts from NodeJS. NodeJS gets the information from MongoDB.
    this.http.get<{ message: string; contacts: Contact[] }>(this.contactsUrl).subscribe({
      next: (responseData) => {
        this.contacts = responseData.contacts || [];
        this.contacts.sort((a, b) => a.name.localeCompare(b.name));
        this.contactListChangedEvent.next(this.contacts.slice());
      },
      error: (error) => {
        console.error('Could not load contacts from the server.', error);
      },
    });

    // slice() gives the component a copy so it does not directly change the original array.
    return this.contacts.slice();
  }

  // This method finds one contact by id.
  getContact(id: string): Contact | null {
    // Loop through every contact in the contacts list.
    for (const contact of this.contacts) {
      // Check if the current contact has the same id.
      if (contact.id === id) {
        // Return the contact that was found.
        return contact;
      }
    }

    // Return null if no contact was found.
    return null;
  }

  // This method adds a new contact to MongoDB through the NodeJS server.
  addContact(newContact: Contact): void {
    // Stop if no contact was sent to this method.
    if (!newContact) {
      return;
    }

    // The server creates the new id and saves the contact in MongoDB.
    this.http.post<{ message: string; contact: Contact }>(this.contactsUrl, newContact).subscribe({
      next: (responseData) => {
        this.contacts.push(responseData.contact);
        this.contacts.sort((a, b) => a.name.localeCompare(b.name));
        this.contactListChangedEvent.next(this.contacts.slice());
      },
      error: (error) => {
        console.error('Could not add the contact.', error);
      },
    });
  }

  // This method updates an existing contact in MongoDB through the NodeJS server.
  updateContact(originalContact: Contact, newContact: Contact): void {
    // Stop if one of the contacts was not sent to this method.
    if (!originalContact || !newContact) {
      return;
    }

    // Keep the same id because this is an update, not a new contact.
    newContact.id = originalContact.id;

    // Send the edited contact to the server.
    this.http.put<{ message: string; contact: Contact }>(`${this.contactsUrl}/${originalContact.id}`, newContact).subscribe({
      next: (responseData) => {
        const pos = this.contacts.findIndex((contact) => contact.id === originalContact.id);
        if (pos >= 0) {
          this.contacts[pos] = responseData.contact;
        }
        this.contacts.sort((a, b) => a.name.localeCompare(b.name));
        this.contactListChangedEvent.next(this.contacts.slice());
      },
      error: (error) => {
        console.error('Could not update the contact.', error);
      },
    });
  }

  // This method deletes a contact from MongoDB through the NodeJS server.
  deleteContact(contact: Contact): void {
    // Stop if no contact was sent to this method.
    if (!contact) {
      return;
    }

    // Ask the server to remove this contact from MongoDB.
    this.http.delete<{ message: string }>(`${this.contactsUrl}/${contact.id}`).subscribe({
      next: () => {
        this.contacts = this.contacts.filter((currentContact) => currentContact.id !== contact.id);
        this.contactListChangedEvent.next(this.contacts.slice());
      },
      error: (error) => {
        console.error('Could not delete the contact.', error);
      },
    });
  }
}
