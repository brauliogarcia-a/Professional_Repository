// This imports the Angular tools needed to create a component and send events.
import { Component, EventEmitter, Output } from '@angular/core';

// This imports the Contact model.
// The model defines what information each contact should have.
import { Contact } from '../contact.model';

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
export class ContactList {
  // @Output lets this child component send information to the parent component.
  // selectedContactEvent will send the contact selected by the user.
  @Output() selectedContactEvent = new EventEmitter<Contact>();

  // This array stores the list of contacts that will be shown on the page.
  // Each item is created using the Contact model.
  contacts: Contact[] = [
    // This creates the first contact with id, name, email, phone, image, and group.
    new Contact(
      '1',
      'R. Kent Jackson',
      'jacksonk@byui.edu',
      '208-496-3771',
      'assets/images/jacksonk.jpg',
      null
    ),

    // This creates the second contact with id, name, email, phone, image, and group.
    new Contact(
      '2',
      'Rex Barzee',
      'barzeer@byui.edu',
      '208-496-3768',
      'assets/images/barzeer.jpg',
      null
    )
  ];

  // This method runs when the user selects a contact.
  onSelected(contact: Contact): void {
    // This sends the selected contact to the parent component.
    this.selectedContactEvent.emit(contact);
  }
}