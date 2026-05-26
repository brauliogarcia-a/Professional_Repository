// This imports the Angular tools needed to create a service and send events.
// EventEmitter lets this service notify other components when a document is selected.
import { EventEmitter, Injectable } from '@angular/core';

// This imports the Document model.
// The model defines the structure of a document object.
import { Document } from './document.model';

// This imports the mock document data for this week.
// Later this data can come from a real database or server.
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

// This decorator tells Angular that this class is a service.
@Injectable({
  // providedIn root means Angular creates one shared copy of this service for the whole app.
  providedIn: 'root',
})

// This service manages the document data for the application.
export class DocumentService {
  // This event is used for cross-component communication.
  // When a document is selected, this event sends that document to the components listening to it.
  documentSelectedEvent = new EventEmitter<Document>();

  // This array stores the main list of documents.
  documents: Document[] = [];

  // The constructor runs when Angular creates this service.
  constructor() {
    // This loads the mock documents into the service.
    this.documents = MOCKDOCUMENTS;
  }

  // This method returns a copy of the document list.
  getDocuments(): Document[] {
    // slice() gives the component a copy so it does not directly change the original array.
    return this.documents.slice();
  }

  // This method finds one document by id.
  getDocument(id: string): Document | null {
    // Loop through every document in the documents list.
    for (const document of this.documents) {
      // Check if the current document has the same id.
      if (document.id === id) {
        // Return the document that was found.
        return document;
      }
    }

    // Return null if no document was found.
    return null;
  }
}
