// This imports the Angular tools needed to create a service and send events.
// EventEmitter lets this service notify components when the message list changes.
import { EventEmitter, Injectable } from '@angular/core';

// This imports the Angular tool needed to make HTTP requests.
import { HttpClient } from '@angular/common/http';

// This imports the Message model.
// The model defines the structure of a message object.
import { Message } from './message.model';

// This imports the local NodeJS API address used by this application.
import { DATABASE_URL } from '../shared/database-config';

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

  // This is the URL used for message requests sent to the local server.
  private messagesUrl = `${DATABASE_URL}/messages`;

  // The constructor runs when Angular creates this service.
  constructor(private http: HttpClient) {}

  // This method returns a copy of the message list.
  getMessages(): Message[] {
    // Get the messages from NodeJS. NodeJS gets the information from MongoDB.
    this.http.get<{ message: string; messages: Message[] }>(this.messagesUrl).subscribe({
      next: (responseData) => {
        this.messages = responseData.messages || [];
        this.messageChangedEvent.emit(this.messages.slice());
      },
      error: (error) => {
        console.error('Could not load messages from the server.', error);
      },
    });

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

  // This method adds a new message to MongoDB through the NodeJS server.
  addMessage(message: Message): void {
    // Stop if no message was sent to this method.
    if (!message) {
      return;
    }

    // The server creates the new id and saves the message in MongoDB.
    this.http.post<{ message: string; createdMessage: Message }>(this.messagesUrl, message).subscribe({
      next: (responseData) => {
        this.messages.push(responseData.createdMessage);
        this.messageChangedEvent.emit(this.messages.slice());
      },
      error: (error) => {
        console.error('Could not add the message.', error);
      },
    });
  }
}
