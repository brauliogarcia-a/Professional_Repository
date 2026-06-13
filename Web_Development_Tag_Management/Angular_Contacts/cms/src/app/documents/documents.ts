// This imports the Angular tools needed to create a component and use lifecycle methods.
import { Component, OnDestroy, OnInit } from '@angular/core';

// This imports Subscription from rxjs.
// It lets us unsubscribe before this component is destroyed.
import { Subscription } from 'rxjs';

// This imports the Document model.
// The model defines the structure of a document object.
import { Document } from './document.model';

// This imports the DocumentService.
// The service lets this component listen when a document is selected.
import { DocumentService } from './document.service';

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
export class Documents implements OnInit, OnDestroy {
  // This variable keeps track of the document selected by the user.
  // It starts as null because no document is selected at the beginning.
  selectedDocument: Document | null = null;

  // This stores the subscription so we can unsubscribe later.
  subscription!: Subscription;

  // The constructor injects the DocumentService into this component.
  constructor(private documentService: DocumentService) {}

  // ngOnInit runs when Angular finishes creating this component.
  ngOnInit(): void {
    // Listen for the selected document event from the service.
    this.subscription = this.documentService.documentSelectedEvent.subscribe((document: Document) => {
      // Save the selected document so the detail component can display it.
      this.selectedDocument = document;
    });
  }

  // ngOnDestroy runs before Angular removes this component from memory.
  ngOnDestroy(): void {
    // Unsubscribe to avoid a memory leak.
    this.subscription.unsubscribe();
  }
}
