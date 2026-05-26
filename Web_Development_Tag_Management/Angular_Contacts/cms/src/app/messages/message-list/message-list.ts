// This imports the Angular tools needed to create a component and use the OnInit lifecycle method.
import { Component, OnInit } from '@angular/core';

// This imports the Message model.
// The model defines what information each message should have.
import { Message } from '../message.model';

// This imports the MessageService.
// The service stores the messages and tells this component when the list changes.
import { MessageService } from '../message.service';

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
export class MessageList implements OnInit {
  // This array stores the list of messages that will be shown on the page.
  // It starts empty because the data now comes from the MessageService.
  messages: Message[] = [];

  // The constructor injects the MessageService into this component.
  constructor(private messageService: MessageService) {}

  // ngOnInit runs when Angular finishes creating this component.
  ngOnInit(): void {
    // Get the first copy of the messages from the service.
    this.messages = this.messageService.getMessages();

    // Listen for changes in the message list.
    this.messageService.messageChangedEvent.subscribe((messages: Message[]) => {
      // Save the new copy of the messages so the page refreshes.
      this.messages = messages;
    });
  }
}
