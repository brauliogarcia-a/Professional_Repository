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
  // Each item is created using the Document model.
  documents: Document[] = [
    // This creates the first document with id, name, description, url, and children.
    new Document(
      '1',
      'Weekly Assignment',
      'Instructions and requirements for the weekly assignment.',
      'https://byui.edu',
      null
    ),

    // This creates the second document with id, name, description, url, and children.
    new Document(
      '2',
      'Course Notes',
      'Notes about Angular components and data binding.',
      'https://byui.edu',
      null
    ),
  ];

  // This method runs when the user selects a document.
  onSelected(document: Document): void {
    // This sends the selected document to the parent component.
    this.selectedDocumentEvent.emit(document);
  }
}