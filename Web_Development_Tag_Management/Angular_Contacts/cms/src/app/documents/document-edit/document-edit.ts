// This imports the Angular tools needed to create a component and use ngOnInit.
import { Component, OnInit } from '@angular/core';

// This imports NgForm so this component can read the form values.
import { NgForm } from '@angular/forms';

// These imports let this component read route parameters and navigate to another route.
import { ActivatedRoute, Params, Router } from '@angular/router';

// This imports the Document model.
// The model defines the structure of a document object.
import { Document } from '../document.model';

// This imports the DocumentService.
// The service adds or updates documents and notifies the list when data changes.
import { DocumentService } from '../document.service';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show the document edit component.
  selector: 'cms-document-edit',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './document-edit.html',

  // This connects this component with its CSS file.
  styleUrl: './document-edit.css',
})

// This is the DocumentEdit component class.
export class DocumentEdit implements OnInit {
  // This stores the original document before the user changes it.
  originalDocument: Document | null = null;

  // This stores the copy of the document shown in the form.
  document: Document | null = null;

  // This tells the component if it is adding a new document or editing an old one.
  editMode: boolean = false;

  // The constructor injects the services this component needs.
  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // ngOnInit runs when Angular creates this component.
  ngOnInit(): void {
    // Listen to the route parameters to know if an id was sent in the URL.
    this.route.params.subscribe((params: Params) => {
      // Get the id parameter from the route.
      const id = params['id'];

      // If there is no id, the form is being used to add a new document.
      if (!id) {
        this.editMode = false;
        this.originalDocument = null;
        this.document = null;
        return;
      }

      // If there is an id, try to find the original document in the service.
      this.originalDocument = this.documentService.getDocument(id);

      // Stop if no document was found for that id.
      if (!this.originalDocument) {
        return;
      }

      // The form is editing an existing document.
      this.editMode = true;

      // Clone the document so the original is not changed until the user clicks Save.
      this.document = JSON.parse(JSON.stringify(this.originalDocument));
    });
  }

  // This method runs when the user submits the form.
  onSubmit(form: NgForm): void {
    // Stop if the form is not valid.
    if (!form.valid) {
      return;
    }

    // Get the values typed by the user.
    const value = form.value;

    // Create a document object from the form values.
    const newDocument = new Document('', value.name, value.url, value.description);

    // Update the old document when edit mode is on.
    if (this.editMode && this.originalDocument) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      // Add a new document when edit mode is off.
      this.documentService.addDocument(newDocument);
    }

    // Go back to the documents page after saving.
    this.router.navigate(['/documents']);
  }

  // This method runs when the user clicks Cancel.
  onCancel(): void {
    // Go back to the documents page without saving changes.
    this.router.navigate(['/documents']);
  }
}
