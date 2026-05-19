// This imports the Angular tools needed to create a component and receive data from a parent.
import { Component, Input } from '@angular/core';

// This imports the Document model.
// The model defines the structure of a document object.
import { Document } from '../document.model';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show the document detail component.
  selector: 'cms-document-detail',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './document-detail.html',

  // This connects this component with its CSS file.
  styleUrl: './document-detail.css',
})

// This is the DocumentDetail component class.
export class DocumentDetail {
  // @Input lets this child component receive data from the parent component.
  // document will receive the selected document from the Documents component.
  // It starts as null because no document is selected at the beginning.
  @Input() document: Document | null = null;
}
