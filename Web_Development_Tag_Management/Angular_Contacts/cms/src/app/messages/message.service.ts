// This imports the Angular tools needed to create a service and send events.
// EventEmitter lets this service notify components when the message list changes.
import { EventEmitter, Injectable } from '@angular/core';

// This imports the Angular tools needed to make HTTP requests.
import { HttpClient, HttpHeaders } from '@angular/common/http';

// This imports the Message model.
// The model defines the structure of a message object.
import { Message } from './message.model';

// This imports the mock message data for this week.
// Later this data can come from a real database or server.
import { MOCKMESSAGES } from './MOCKMESSAGES';

// This imports the Firebase database URL used by this application.
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

  // This keeps track of the largest message id.
  maxMessageId: number = 0;

  // This is the URL used for the messages data in Firebase.
  private messagesUrl = `${DATABASE_URL}/messages.json`;

  // The constructor runs when Angular creates this service.
  constructor(private http: HttpClient) {
    // This loads the mock messages into the service until the HTTP request returns.
    this.messages = MOCKMESSAGES;
    this.maxMessageId = this.getMaxId();
  }

  // This method returns a copy of the message list.
  getMessages(): Message[] {
    // Get the messages from the Firebase database.
    this.http.get<Message[]>(this.messagesUrl).subscribe({
      next: (messages: Message[]) => {
        // Use the server data only when the database returns a list.
        if (messages) {
          this.messages = messages;
          this.maxMessageId = this.getMaxId();
          this.messageChangedEvent.emit(this.messages.slice());
        }
      },
      error: (error) => {
        // Keep the mock messages available if the Firebase URL has not been configured yet.
        console.error('Could not load messages from Firebase.', error);
      },
    });

    // slice() gives the component a copy so it does not directly change the original array.
    return this.messages.slice();
  }

  // This method saves the current message list in Firebase.
  storeMessages(): void {
    // Convert the messages array to JSON before it is sent to the server.
    const messagesString = JSON.stringify(this.messages);

    // These headers tell Firebase that the request body contains JSON.
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the full messages list to Firebase with an HTTP PUT request.
    this.http.put(this.messagesUrl, messagesString, { headers }).subscribe({
      next: () => {
        // Emit a fresh copy of the updated list so the message list can refresh on the page.
        this.messageChangedEvent.emit(this.messages.slice());
      },
      error: (error) => {
        console.error('Could not save messages to Firebase.', error);
      },
    });
  }

  // This method finds the largest id number in the message list.
  getMaxId(): number {
    // Start with zero in case the list is empty.
    let maxId = 0;

    // Loop through every message in the messages list.
    for (const message of this.messages) {
      // Convert the message id from a string to a number.
      const currentId = parseInt(message.id, 10);

      // Only compare valid numbers.
      if (!isNaN(currentId) && currentId > maxId) {
        // Save the largest id found so far.
        maxId = currentId;
      }
    }

    // Return the largest id found.
    return maxId;
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
    // Stop if no message was sent to this method.
    if (!message) {
      return;
    }

    // Create the next unique id before adding the message.
    this.maxMessageId++;
    message.id = this.maxMessageId.toString();

    // Push the new message into the service array so it is saved while the app is running.
    this.messages.push(message);

    // Save the new message list in Firebase.
    this.storeMessages();
  }
}
