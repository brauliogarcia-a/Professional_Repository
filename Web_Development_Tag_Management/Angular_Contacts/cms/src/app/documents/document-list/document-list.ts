// This imports the Angular tools needed to create a component and use the OnInit lifecycle method.
import { Component, OnInit } from '@angular/core';

// This imports the Document model.
// The model defines what information each document should have.
import { Document } from '../document.model';

// This imports the DocumentService.
// The service stores the documents and shares document events between components.
import { DocumentService } from '../document.service';

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
export class DocumentList implements OnInit {
  // This array stores the list of documents that will be shown on the page.
  // It starts empty because the data now comes from the DocumentService.
  documents: Document[] = [];

  // The constructor injects the DocumentService into this component.
  constructor(private documentService: DocumentService) {}

  // ngOnInit runs when Angular finishes creating this component.
  ngOnInit(): void {
    // Get the documents from the service and save them in this component.
    this.documents = this.documentService.getDocuments();
  }

  // This method runs when the user selects a document.
  onSelectedDocument(document: Document): void {
    // This sends the selected document through the service event.
    // Other components can listen to this event without using parent-child output binding.
    this.documentService.documentSelectedEvent.emit(document);
  }
}
