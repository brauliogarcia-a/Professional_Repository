// This imports the Angular tools needed to create a component and send events.
import { Component, EventEmitter, Output } from '@angular/core';

// This imports the Document model.
// The model defines what information each document should have.
import { Document } from '../document.model';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show the document list component.
  selector: 'cms-document-list',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './document-list.html',

  // This connects this component with its CSS file.
  styleUrl: './document-list.css',
})

// This is the DocumentList component class.
export class DocumentList {
  // @Output lets this child component send information to the parent component.
  // selectedDocumentEvent will send the document selected by the user.
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  // This array stores the list of documents that will be shown on the page.
  // This array stores a dummy list of documents that will be shown on the page.
  // Each item is created using the Document model.
  // Each item is created using the Document model with id, name, description, url, and children.
  documents: Document[] = [
    // This creates the first document with id, name, description, url, and children.
    // This creates the first test document.
    new Document(
      '1',
      'Angular Notes',
      'Notes about Angular components, data binding, and component communication.',
      'https://angular.dev',
      null
    ),

    // This creates the second document with id, name, description, url, and children.
    // This creates the second test document.
    new Document(
      '2',
      'Weekly Assignment',
      'Instructions and requirements for the week 04 assignment.',
      'https://byui.edu',
      null
    ),

    // This creates the third test document.
    new Document(
      '3',
      'Project Plan',
      'A simple plan for organizing the CMS project files and features.',
      'https://github.com',
      null
    ),

    // This creates the fourth test document.
    new Document(
      '4',
      'Team Meeting Notes',
      'Notes from a team meeting about documents, messages, and contacts.',
      'https://docs.google.com',
      null
    ),

    // This creates the fifth test document.
    new Document(
      '5',
      'Final Checklist',
      'A checklist to review the project before submitting the GitHub and video links.',
      'https://canvas.instructure.com',
      null
    ),
  ];

  // This method runs when the user selects a document.
  onSelectedDocument(document: Document): void {
    // This sends the selected document to the parent component.
    // This sends the selected document to the parent Documents component.
    this.selectedDocumentEvent.emit(document);
  }
}
