// This imports the Angular tools needed to create a service.
import { Injectable } from '@angular/core';

// This imports the Angular tools needed to make HTTP requests.
import { HttpClient, HttpHeaders } from '@angular/common/http';

// This imports Subject from rxjs.
// A Subject lets this service notify components when something changes.
import { Subject } from 'rxjs';

// This imports the Contact model.
// The model defines the structure of a contact object.
import { Contact } from './contact.model';

// This imports the mock contact data for this week.
// Later this data can come from a real database or server.
import { MOCKCONTACTS } from './MOCKCONTACTS';

// This imports the Firebase database URL used by this application.
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

  // This keeps track of the largest contact id.
  // It helps create a new unique id when a contact is added.
  maxContactId: number = 0;

  // This is the URL used for the contacts data in Firebase.
  private contactsUrl = `${DATABASE_URL}/contacts.json`;

  // The constructor runs when Angular creates this service.
  constructor(private http: HttpClient) {
    // This loads the mock contacts into the service until the HTTP request returns.
    this.contacts = MOCKCONTACTS;

    // This gets the largest id that already exists in the contact list.
    this.maxContactId = this.getMaxId();
  }

  // This method returns a copy of the contact list.
  getContacts(): Contact[] {
    // Get the contacts from the Firebase database.
    this.http.get<Contact[]>(this.contactsUrl).subscribe({
      next: (contacts: Contact[]) => {
        // Use the server data only when the database returns a list.
        if (contacts) {
          this.contacts = contacts;
          this.maxContactId = this.getMaxId();
          this.contacts.sort((a, b) => a.name.localeCompare(b.name));
          this.contactListChangedEvent.next(this.contacts.slice());
        }
      },
      error: (error) => {
        // Keep the mock contacts available if the Firebase URL has not been configured yet.
        console.error('Could not load contacts from Firebase.', error);
      },
    });

    // slice() gives the component a copy so it does not directly change the original array.
    return this.contacts.slice();
  }

  // This method saves the current contact list in Firebase.
  storeContacts(): void {
    // Convert the contacts array to JSON before it is sent to the server.
    const contactsString = JSON.stringify(this.contacts);

    // These headers tell Firebase that the request body contains JSON.
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the full contacts list to Firebase with an HTTP PUT request.
    this.http.put(this.contactsUrl, contactsString, { headers }).subscribe({
      next: () => {
        // Tell the list component that the contacts were saved.
        this.contactListChangedEvent.next(this.contacts.slice());
      },
      error: (error) => {
        console.error('Could not save contacts to Firebase.', error);
      },
    });
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

  // This method finds the largest id number in the contact list.
  getMaxId(): number {
    // Start with zero in case the list is empty.
    let maxId = 0;

    // Loop through every contact in the contacts list.
    for (const contact of this.contacts) {
      // Convert the contact id from a string to a number.
      const currentId = parseInt(contact.id, 10);

      // Only compare valid numbers.
      if (!isNaN(currentId) && currentId > maxId) {
        // Save the largest id found so far.
        maxId = currentId;
      }
    }

    // Return the largest id found.
    return maxId;
  }

  // This method adds a new contact to the list.
  addContact(newContact: Contact): void {
    // Stop if no contact was sent to this method.
    if (!newContact) {
      return;
    }

    // Create the next unique id.
    this.maxContactId++;

    // Save the new id as a string because the Contact model uses a string id.
    newContact.id = this.maxContactId.toString();

    // Add the new contact to the contacts array.
    this.contacts.push(newContact);

    // Save the new contact list in Firebase.
    this.storeContacts();
  }

  // This method updates an existing contact in the list.
  updateContact(originalContact: Contact, newContact: Contact): void {
    // Stop if one of the contacts was not sent to this method.
    if (!originalContact || !newContact) {
      return;
    }

    // Find the position of the original contact in the array.
    const pos = this.contacts.indexOf(originalContact);

    // Stop if the original contact was not found.
    if (pos < 0) {
      return;
    }

    // Keep the same id because this is an update, not a new contact.
    newContact.id = originalContact.id;

    // Replace the old contact with the new contact.
    this.contacts[pos] = newContact;

    // Save the updated contact list in Firebase.
    this.storeContacts();
  }

  // This method deletes a contact from the list.
  deleteContact(contact: Contact): void {
    // Stop if no contact was sent to this method.
    if (!contact) {
      return;
    }

    // Find the position of the contact in the array.
    const pos = this.contacts.indexOf(contact);

    // Stop if the contact was not found.
    if (pos < 0) {
      return;
    }

    // Remove one contact from the array at the position found.
    this.contacts.splice(pos, 1);

    // Save the updated contact list in Firebase.
    this.storeContacts();
  }
}
