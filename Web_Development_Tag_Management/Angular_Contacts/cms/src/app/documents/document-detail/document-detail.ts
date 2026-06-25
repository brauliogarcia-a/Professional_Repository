// This imports the Angular tools needed to create a component and use ngOnInit.
import { Component, OnInit } from '@angular/core';

// These imports let this component read the id from the route.
import { ActivatedRoute, Params } from '@angular/router';

// This imports the Document model.
// The model defines the structure of a document object.
import { Document } from '../document.model';

// This imports the DocumentService.
// The service lets this component get the selected document by id.
import { DocumentService } from '../document.service';

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
export class DocumentDetail implements OnInit {
  // This variable stores the document that matches the id in the route.
  document: Document | null = null;

  // The constructor injects the route and the DocumentService.
  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService
  ) {}

  // ngOnInit runs when Angular finishes creating this component.
  ngOnInit(): void {
    // Listen to the route parameters so the detail changes when a different document is selected.
    this.route.params.subscribe((params: Params) => {
      // Get the document id from the route.
      const id = params['id'];

      // Get the matching document from the service.
      this.document = this.documentService.getDocument(id);
    });
  }
}
