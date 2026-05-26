// This imports the Angular tools needed to create a component and use the OnInit lifecycle method.
import { Component, OnInit } from '@angular/core';

// This imports the Contact model.
// The model defines the structure of a contact object.
import { Contact } from './contact.model';

// This imports the ContactService.
// The service lets this component listen when a contact is selected.
import { ContactService } from './contact.service';

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
export class Contacts implements OnInit {
  // This variable keeps track of the contact selected by the user.
  // It starts as null because no contact is selected at the beginning.
  selectedContact: Contact | null = null;

  // The constructor injects the ContactService into this component.
  constructor(private contactService: ContactService) {}

  // ngOnInit runs when Angular finishes creating this component.
  ngOnInit(): void {
    // Listen for the selected contact event from the service.
    this.contactService.contactSelectedEvent.subscribe((contact: Contact) => {
      // Save the selected contact so the detail component can display it.
      this.selectedContact = contact;
    });
  }
}
