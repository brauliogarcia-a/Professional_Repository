// This imports the Angular tools needed to create a component and use lifecycle methods.
import { Component, OnDestroy, OnInit } from '@angular/core';

// This imports Subscription from rxjs.
// It lets us unsubscribe before this component is destroyed.
import { Subscription } from 'rxjs';

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
export class DocumentList implements OnInit, OnDestroy {
  // This array stores the list of documents that will be shown on the page.
  // It starts empty because the data now comes from the DocumentService.
  documents: Document[] = [];

  // This stores the subscription so we can unsubscribe later.
  subscription!: Subscription;

  // The constructor injects the DocumentService into this component.
  constructor(private documentService: DocumentService) {}

  // ngOnInit runs when Angular finishes creating this component.
  ngOnInit(): void {
    // Get the documents from the service and save them in this component.
    this.documents = this.documentService.getDocuments();

    // Listen for changes to the documents list.
    this.subscription = this.documentService.documentListChangedEvent.subscribe(
      (documentsList: Document[]) => {
        // Replace the local list with the updated list from the service.
        this.documents = documentsList;
      }
    );
  }

  // ngOnDestroy runs before Angular removes this component from memory.
  ngOnDestroy(): void {
    // Unsubscribe to avoid a memory leak.
    this.subscription.unsubscribe();
  }

  // This method runs when the user selects a document.
  onSelectedDocument(document: Document): void {
    // This sends the selected document through the service Subject.
    // Other components can listen to this event without using parent-child output binding.
    this.documentService.documentSelectedEvent.next(document);
  }
}
