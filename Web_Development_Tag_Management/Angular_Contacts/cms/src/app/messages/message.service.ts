// This imports the Angular tools needed to create a service and send events.
// EventEmitter lets this service notify components when the message list changes.
import { EventEmitter, Injectable } from '@angular/core';

// This imports the Message model.
// The model defines the structure of a message object.
import { Message } from './message.model';

// This imports the mock message data for this week.
// Later this data can come from a real database or server.
import { MOCKMESSAGES } from './MOCKMESSAGES';

// This decorator tells Angular that this class is a service.
@Injectable({
  // providedIn root means Angular creates one shared copy of this service for the whole app.
  providedIn: 'root',
})

// This service manages the message data for the application.
export class MessageService {
  // This event tells the message list when the messages array has changed.
  messageChangedEvent = new EventEmitter<Message[]>();

  // This array stores the main list of messages.
  messages: Message[] = [];

  // The constructor runs when Angular creates this service.
  constructor() {
    // This loads the mock messages into the service.
    this.messages = MOCKMESSAGES;
  }

  // This method returns a copy of the message list.
  getMessages(): Message[] {
    // slice() gives the component a copy so it does not directly change the original array.
    return this.messages.slice();
  }

  // This method finds one message by id.
  getMessage(id: string): Message | null {
    // Loop through every message in the messages list.
    for (const message of this.messages) {
      // Check if the current message has the same id.
      if (message.id === id) {
        // Return the message that was found.
        return message;
      }
    }

    // Return null if no message was found.
    return null;
  }

  // This method adds a new message to the main message list.
  addMessage(message: Message): void {
    // Push the new message into the service array so it is saved while the app is running.
    this.messages.push(message);

    // Emit a fresh copy of the updated list so the message list can refresh on the page.
    this.messageChangedEvent.emit(this.messages.slice());
  }
}
