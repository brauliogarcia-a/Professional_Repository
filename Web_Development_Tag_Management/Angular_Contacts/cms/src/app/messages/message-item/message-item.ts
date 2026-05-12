// This imports the Angular tools needed to create a component and receive data from a parent.
import { Component, Input } from '@angular/core';

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
export class MessageItem {
  // @Input lets this child component receive data from the parent component.
  // message will receive one message from the MessageList component.
  // It starts as null in case no message is passed yet.
  @Input() message: Message | null = null;
}