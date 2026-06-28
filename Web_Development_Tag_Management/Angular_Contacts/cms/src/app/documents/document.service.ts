// This imports the Angular tools needed to create a service.
import { Injectable } from '@angular/core';

// This imports the Angular tools needed to make HTTP requests.
import { HttpClient, HttpHeaders } from '@angular/common/http';

// This imports Subject from rxjs.
// A Subject lets this service notify components when something changes.
import { Subject } from 'rxjs';

// This imports the Document model.
// The model defines the structure of a document object.
import { Document } from './document.model';

// This imports the mock document data for this week.
// Later this data can come from a real database or server.
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

// This imports the Firebase database URL used by this application.
import { DATABASE_URL } from '../shared/database-config';

// This decorator tells Angular that this class is a service.
@Injectable({
  // providedIn root means Angular creates one shared copy of this service for the whole app.
  providedIn: 'root',
})

// This service manages the document data for the application.
export class DocumentService {
  // This Subject is used for cross-component communication.
  // When a document is selected, this event sends that document to the components listening to it.
  documentSelectedEvent = new Subject<Document>();

  // This Subject tells the document list when the documents array has changed.
  // It sends a new copy of the list after a document is added, updated, or deleted.
  documentListChangedEvent = new Subject<Document[]>();

  // This array stores the main list of documents.
  documents: Document[] = [];

  // This keeps track of the largest document id.
  // It helps create a new unique id when a document is added.
  maxDocumentId: number = 0;

  // This is the URL used for the documents data in Firebase.
  private documentsUrl = `${DATABASE_URL}/documents.json`;

  // The constructor runs when Angular creates this service.
  constructor(private http: HttpClient) {
    // This loads the mock documents into the service until the HTTP request returns.
    this.documents = MOCKDOCUMENTS;

    // This gets the largest id that already exists in the document list.
    this.maxDocumentId = this.getMaxId();
  }

  // This method returns a copy of the document list.
  getDocuments(): Document[] {
    // Get the documents from the Firebase database.
    this.http.get<Document[]>(this.documentsUrl).subscribe({
      next: (documents: Document[]) => {
        // Use the server data only when the database returns a list.
        if (documents) {
          this.documents = documents;
          this.maxDocumentId = this.getMaxId();
          this.documents.sort((a, b) => a.name.localeCompare(b.name));
          this.documentListChangedEvent.next(this.documents.slice());
        }
      },
      error: (error) => {
        // Keep the mock documents available if the Firebase URL has not been configured yet.
        console.error('Could not load documents from Firebase.', error);
      },
    });

    // slice() gives the component a copy so it does not directly change the original array.
    return this.documents.slice();
  }

  // This method saves the current document list in Firebase.
  storeDocuments(): void {
    // Convert the documents array to JSON before it is sent to the server.
    const documentsString = JSON.stringify(this.documents);

    // These headers tell Firebase that the request body contains JSON.
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the full documents list to Firebase with an HTTP PUT request.
    this.http.put(this.documentsUrl, documentsString, { headers }).subscribe({
      next: () => {
        // Tell the list component that the documents were saved.
        this.documentListChangedEvent.next(this.documents.slice());
      },
      error: (error) => {
        console.error('Could not save documents to Firebase.', error);
      },
    });
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

  // This method finds the largest id number in the document list.
  getMaxId(): number {
    // Start with zero in case the list is empty.
    let maxId = 0;

    // Loop through every document in the documents list.
    for (const document of this.documents) {
      // Convert the document id from a string to a number.
      const currentId = parseInt(document.id, 10);

      // Only compare valid numbers.
      if (!isNaN(currentId) && currentId > maxId) {
        // Save the largest id found so far.
        maxId = currentId;
      }
    }

    // Return the largest id found.
    return maxId;
  }

  // This method adds a new document to the list.
  addDocument(newDocument: Document): void {
    // Stop if no document was sent to this method.
    if (!newDocument) {
      return;
    }

    // Create the next unique id.
    this.maxDocumentId++;

    // Save the new id as a string because the Document model uses a string id.
    newDocument.id = this.maxDocumentId.toString();

    // Add the new document to the documents array.
    this.documents.push(newDocument);

    // Save the new document list in Firebase.
    this.storeDocuments();
  }

  // This method updates an existing document in the list.
  updateDocument(originalDocument: Document, newDocument: Document): void {
    // Stop if one of the documents was not sent to this method.
    if (!originalDocument || !newDocument) {
      return;
    }

    // Find the position of the original document in the array.
    const pos = this.documents.indexOf(originalDocument);

    // Stop if the original document was not found.
    if (pos < 0) {
      return;
    }

    // Keep the same id because this is an update, not a new document.
    newDocument.id = originalDocument.id;

    // Replace the old document with the new document.
    this.documents[pos] = newDocument;

    // Save the updated document list in Firebase.
    this.storeDocuments();
  }

  // This method deletes a document from the list.
  deleteDocument(document: Document): void {
    // Stop if no document was sent to this method.
    if (!document) {
      return;
    }

    // Find the position of the document in the array.
    const pos = this.documents.indexOf(document);

    // Stop if the document was not found.
    if (pos < 0) {
      return;
    }

    // Remove one document from the array at the position found.
    this.documents.splice(pos, 1);

    // Save the updated document list in Firebase.
    this.storeDocuments();
  }
}
