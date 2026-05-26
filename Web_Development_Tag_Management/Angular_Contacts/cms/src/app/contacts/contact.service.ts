// This imports the Angular tools needed to create a service and send events.
// EventEmitter lets this service notify other components when a contact is selected.
import { EventEmitter, Injectable } from '@angular/core';

// This imports the Contact model.
// The model defines the structure of a contact object.
import { Contact } from './contact.model';

// This imports the mock contact data for this week.
// Later this data can come from a real database or server.
import { MOCKCONTACTS } from './MOCKCONTACTS';

// This decorator tells Angular that this class is a service.
@Injectable({
  // providedIn root means Angular creates one shared copy of this service for the whole app.
  providedIn: 'root',
})

// This service manages the contact data for the application.
export class ContactService {
  // This event is used for cross-component communication.
  // When a contact is selected, this event sends that contact to the components listening to it.
  contactSelectedEvent = new EventEmitter<Contact>();

  // This array stores the main list of contacts.
  contacts: Contact[] = [];

  // The constructor runs when Angular creates this service.
  constructor() {
    // This loads the mock contacts into the service.
    this.contacts = MOCKCONTACTS;
  }

  // This method returns a copy of the contact list.
  getContacts(): Contact[] {
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
}
