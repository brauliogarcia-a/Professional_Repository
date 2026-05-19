// This imports the Angular tools needed to create a component and receive data from a parent.
import { Component, Input } from '@angular/core';

// This imports the Document model.
// The model defines what information each document should have.
import { Document } from '../document.model';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show one document item in the list.
  selector: 'cms-document-item',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './document-item.html',

  // This connects this component with its CSS file.
  styleUrl: './document-item.css',
})

// This is the DocumentItem component class.
export class DocumentItem {
  // @Input lets this child component receive the current document from the list component.
  // The exclamation mark tells TypeScript that Angular will give this value when the page runs.
  @Input() document!: Document;
}
