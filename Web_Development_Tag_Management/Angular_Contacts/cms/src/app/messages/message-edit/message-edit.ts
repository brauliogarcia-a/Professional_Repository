// This imports the Angular tools needed for this component.
// ElementRef and ViewChild let us read values directly from input fields.
// EventEmitter and Output let this child component send a new message to the parent component.
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

// This imports the Message model.
// The model defines the structure of a message object.
import { Message } from '../message.model';

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
  // @Output lets this child component send information to the parent component.
  // addMessageEvent will send the new message after the user clicks Send.
  @Output() addMessageEvent = new EventEmitter<Message>();

  // @ViewChild connects this variable with the subject input in the HTML.
  // The ! tells TypeScript this value will exist after the view is loaded.
  @ViewChild('subjectInput') subjectInput!: ElementRef<HTMLInputElement>;

  // @ViewChild connects this variable with the message text input in the HTML.
  // The ! tells TypeScript this value will exist after the view is loaded.
  @ViewChild('msgTextInput') msgTextInput!: ElementRef<HTMLInputElement>;

  // This stores the name of the person sending the message.
  currentSender = 'Braulio Garcia';

  // This method runs when the user clicks the Send button.
  onSendMessage(): void {
    // Get the subject value from the subject input field.
    const subject = this.subjectInput.nativeElement.value;

    // Get the message text value from the message text input field.
    const msgText = this.msgTextInput.nativeElement.value;

    // Create a new Message object using the input values and current sender.
    const newMessage = new Message('6', subject, msgText, this.currentSender);

    // Send the new message to the parent component.
    this.addMessageEvent.emit(newMessage);

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