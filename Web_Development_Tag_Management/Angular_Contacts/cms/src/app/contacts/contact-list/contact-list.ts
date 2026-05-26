// This imports the Angular tools needed to create a component and use the OnInit lifecycle method.
import { Component, OnInit } from '@angular/core';

// This imports the Contact model.
// The model defines what information each contact should have.
import { Contact } from '../contact.model';

// This imports the ContactService.
// The service stores the contacts and shares contact events between components.
import { ContactService } from '../contact.service';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show the contact list component.
  selector: 'cms-contact-list',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './contact-list.html',

  // This connects this component with its CSS file.
  styleUrl: './contact-list.css',
})

// This is the ContactList component class.
export class ContactList implements OnInit {
  // This array stores the list of contacts that will be shown on the page.
  // It starts empty because the data now comes from the ContactService.
  contacts: Contact[] = [];

  // The constructor injects the ContactService into this component.
  constructor(private contactService: ContactService) {}

  // ngOnInit runs when Angular finishes creating this component.
  ngOnInit(): void {
    // Get the contacts from the service and save them in this component.
    this.contacts = this.contactService.getContacts();
  }

  // This method runs when the user selects a contact.
  onSelected(contact: Contact): void {
    // This sends the selected contact through the service event.
    // Other components can listen to this event without using parent-child output binding.
    this.contactService.contactSelectedEvent.emit(contact);
  }
}
