// This imports the Angular tools needed to create a component, receive data from a parent, and use OnInit.
import { Component, Input, OnInit } from '@angular/core';

// This imports the Contact model.
// The model defines the structure of a contact object.
import { Contact } from '../../contacts/contact.model';

// This imports the ContactService.
// The service lets this component find the contact name using the sender id.
import { ContactService } from '../../contacts/contact.service';

// This imports the Message model.
// The model defines the structure of a message object.
import { Message } from '../message.model';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show one message item.
  selector: 'cms-message-item',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './message-item.html',

  // This connects this component with its CSS file.
  styleUrl: './message-item.css',
})

// This is the MessageItem component class.
export class MessageItem implements OnInit {
  // @Input lets this child component receive data from the parent component.
  // message will receive one message from the MessageList component.
  // It starts as null in case no message is passed yet.
  @Input() message: Message | null = null;

  // This variable stores the real sender name that will be displayed in the HTML.
  messageSender = '';

  // The constructor injects ContactService into this component.
  constructor(private contactService: ContactService) {}

  // ngOnInit runs when Angular finishes creating this component.
  ngOnInit(): void {
    // Make sure a message exists before trying to read the sender id.
    if (!this.message) {
      return;
    }

    // Use the sender id from the message to find the matching contact.
    const contact: Contact | null = this.contactService.getContact(this.message.sender);

    // If a contact was found, show the contact name.
    // If not, show Unknown Sender so the page does not break.
    this.messageSender = contact ? contact.name : 'Unknown Sender';
  }
}
