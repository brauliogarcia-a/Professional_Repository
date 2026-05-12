// This imports Component from Angular.
// Component is needed to create an Angular component.
import { Component } from '@angular/core';

// This imports the Document model.
// The model defines the structure of a document object.
import { Document } from './document.model';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show this component.
  selector: 'cms-documents',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects the component with its HTML file.
  templateUrl: './documents.html',

  // This connects the component with its CSS file.
  styleUrl: './documents.css',
})

// This is the Documents component class.
export class Documents {
  // This variable keeps track of the document selected by the user.
  // It starts as null because no document is selected at the beginning.
  selectedDocument: Document | null = null;

  // This method runs when a document is selected from the document list.
  onSelectedDocument(document: Document): void {
    // Save the selected document in the selectedDocument variable.
    this.selectedDocument = document;
  }
}