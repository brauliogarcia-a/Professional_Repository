// This imports the Angular tools needed to create a component and receive data from a parent.
import { Component, Input } from '@angular/core';

// This imports the Contact model.
// The model defines what information each contact should have.
import { Contact } from '../contact.model';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show one contact item in the list.
  selector: 'cms-contact-item',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './contact-item.html',

  // This connects this component with its CSS file.
  styleUrl: './contact-item.css',
})

// This is the ContactItem component class.
export class ContactItem {
  // @Input lets this child component receive the current contact from the list component.
  // The exclamation mark tells TypeScript that Angular will give this value when the page runs.
  @Input() contact!: Contact;
}
