// This imports the Angular tools needed to create a component and receive data from a parent.
import { Component, Input } from '@angular/core';

// This imports the Contact model.
// The model defines the structure of a contact object.
import { Contact } from '../contact.model';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show the contact detail component.
  selector: 'cms-contact-detail',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './contact-detail.html',

  // This connects this component with its CSS file.
  styleUrls: ['./contact-detail.css']
})

// This is the ContactDetail component class.
export class ContactDetail {
  // @Input lets this child component receive data from the parent component.
  // contact will receive the selected contact from the Contacts component.
  // It starts as null because no contact is selected at the beginning.
  @Input() contact: Contact | null = null;
}