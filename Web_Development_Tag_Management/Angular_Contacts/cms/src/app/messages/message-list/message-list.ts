// This imports Component from Angular.
// Component is needed to create an Angular component.
import { Component } from '@angular/core';

// This imports the Message model.
// The model defines what information each message should have.
import { Message } from '../message.model';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show the message list component.
  selector: 'cms-message-list',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './message-list.html',

  // This connects this component with its CSS file.
  styleUrl: './message-list.css',
})

// This is the MessageList component class.
export class MessageList {
  // This array stores the list of messages that will be shown on the page.
  // Each item is created using the Message model.
  messages: Message[] = [
    // This creates the first message with id, subject, message text, and sender.
    new Message(
      '1',
      'Assignment posted',
      'The grades for this assignment have been posted',
      'Bro. Jackson'
    ),

    // This creates the second message.
    new Message(
      '2',
      'Assignment due',
      'When is assignment 3 due',
      'Steve Johnson'
    ),

    // This creates the third message.
    new Message(
      '3',
      'Need help',
      'Can I meet with you sometime. I need help with assignment 3',
      'Mark Smith'
    ),

    // This creates the fourth message.
    new Message(
      '4',
      'Meeting',
      'I can meet with you today at 4:00 PM in my office.',
      'Bro. Jackson'
    ),
  ];

  // This method runs when a new message is created.
  onAddMessage(message: Message): void {
    // This adds the new message to the messages array.
    // After this, the message can be shown in the message list.
    this.messages.push(message);
  }
}
