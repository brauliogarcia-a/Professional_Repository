// This imports Component from Angular.
// Component is needed to create an Angular component.
import { Component } from '@angular/core';

// This imports the Contact model.
// The model defines the structure of a contact object.
import { Contact } from './contact.model';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show this component.
  selector: 'cms-contacts',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects the component with its HTML file.
  templateUrl: './contacts.html',

  // This connects the component with its CSS file.
  styleUrl: './contacts.css',
})

// This is the Contacts component class.
export class Contacts {
  // This variable keeps track of the contact selected by the user.
  // It starts as null because no contact is selected at the beginning.
  selectedContact: Contact | null = null;

  // This method runs when a contact is selected from the contact list.
  onSelectedContact(contact: Contact): void {
    // Save the selected contact in the selectedContact variable.
    this.selectedContact = contact;
  }
}