// This imports the Angular tools needed for this component.
// ElementRef and ViewChild let us read values directly from input fields.
import { Component, ElementRef, ViewChild } from '@angular/core';

// This imports the Message model.
// The model defines the structure of a message object.
import { Message } from '../message.model';

// This imports the MessageService.
// The service saves new messages and notifies the message list when the data changes.
import { MessageService } from '../message.service';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show the message edit component.
  selector: 'cms-message-edit',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './message-edit.html',

  // This connects this component with its CSS file.
  styleUrl: './message-edit.css',
})

// This is the MessageEdit component class.
export class MessageEdit {
  // @ViewChild connects this variable with the subject input in the HTML.
  // The ! tells TypeScript this value will exist after the view is loaded.
  @ViewChild('subjectInput') subjectInput!: ElementRef<HTMLInputElement>;

  // @ViewChild connects this variable with the message text input in the HTML.
  // The ! tells TypeScript this value will exist after the view is loaded.
  @ViewChild('msgTextInput') msgTextInput!: ElementRef<HTMLInputElement>;

  // This stores the id of the contact sending the message.
  // The mock messages use contact ids instead of contact names.
  currentSender = '1';

  // The constructor injects the MessageService into this component.
  constructor(private messageService: MessageService) {}

  // This method runs when the user clicks the Send button.
  onSendMessage(): void {
    // Get the subject value from the subject input field.
    const subject = this.subjectInput.nativeElement.value;

    // Get the message text value from the message text input field.
    const msgText = this.msgTextInput.nativeElement.value;

    // Stop if the subject or message is empty.
    if (!subject.trim() || !msgText.trim()) {
      return;
    }

    // Create a simple new id using the current date and time.
    const newId = Date.now().toString();

    // Create a new Message object using the input values and current sender id.
    const newMessage = new Message(newId, subject, msgText, this.currentSender);

    // Save the new message in the service.
    // The service will also tell the message list to refresh.
    this.messageService.addMessage(newMessage);

    // Clear the input fields after sending the message.
    this.onClear();
  }

  // This method clears the input fields.
  onClear(): void {
    // Clear the subject input field.
    this.subjectInput.nativeElement.value = '';

    // Clear the message text input field.
    this.msgTextInput.nativeElement.value = '';
  }
}
