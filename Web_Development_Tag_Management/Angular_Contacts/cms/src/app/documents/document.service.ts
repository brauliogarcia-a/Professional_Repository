// This imports the Angular tools needed to create a service.
import { Injectable } from '@angular/core';

// This imports the Angular tool needed to make HTTP requests.
import { HttpClient } from '@angular/common/http';

// This imports Subject from rxjs.
// A Subject lets this service notify components when something changes.
import { Subject } from 'rxjs';

// This imports the Document model.
// The model defines the structure of a document object.
import { Document } from './document.model';

// This imports the local NodeJS API address used by this application.
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

  // This is the URL used for document requests sent to the local server.
  private documentsUrl = `${DATABASE_URL}/documents`;

  // The constructor runs when Angular creates this service.
  constructor(private http: HttpClient) {}

  // This method returns a copy of the document list.
  getDocuments(): Document[] {
    // Get the documents from NodeJS. NodeJS gets the information from MongoDB.
    this.http.get<{ message: string; documents: Document[] }>(this.documentsUrl).subscribe({
      next: (responseData) => {
        // Save the documents returned by the server.
        this.documents = responseData.documents || [];
        this.documents.sort((a, b) => a.name.localeCompare(b.name));
        this.documentListChangedEvent.next(this.documents.slice());
      },
      error: (error) => {
        console.error('Could not load documents from the server.', error);
      },
    });

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

  // This method adds a new document to MongoDB through the NodeJS server.
  addDocument(newDocument: Document): void {
    // Stop if no document was sent to this method.
    if (!newDocument) {
      return;
    }

    // The server creates the new id and saves the document in MongoDB.
    this.http.post<{ message: string; document: Document }>(this.documentsUrl, newDocument).subscribe({
      next: (responseData) => {
        this.documents.push(responseData.document);
        this.documents.sort((a, b) => a.name.localeCompare(b.name));
        this.documentListChangedEvent.next(this.documents.slice());
      },
      error: (error) => {
        console.error('Could not add the document.', error);
      },
    });
  }

  // This method updates an existing document in MongoDB through the NodeJS server.
  updateDocument(originalDocument: Document, newDocument: Document): void {
    // Stop if one of the documents was not sent to this method.
    if (!originalDocument || !newDocument) {
      return;
    }

    // Keep the same id because this is an update, not a new document.
    newDocument.id = originalDocument.id;

    // Send the edited document to the server.
    this.http.put<{ message: string; document: Document }>(`${this.documentsUrl}/${originalDocument.id}`, newDocument).subscribe({
      next: (responseData) => {
        const pos = this.documents.findIndex((document) => document.id === originalDocument.id);
        if (pos >= 0) {
          this.documents[pos] = responseData.document;
        }
        this.documents.sort((a, b) => a.name.localeCompare(b.name));
        this.documentListChangedEvent.next(this.documents.slice());
      },
      error: (error) => {
        console.error('Could not update the document.', error);
      },
    });
  }

  // This method deletes a document from MongoDB through the NodeJS server.
  deleteDocument(document: Document): void {
    // Stop if no document was sent to this method.
    if (!document) {
      return;
    }

    // Ask the server to remove this document from MongoDB.
    this.http.delete<{ message: string }>(`${this.documentsUrl}/${document.id}`).subscribe({
      next: () => {
        this.documents = this.documents.filter((currentDocument) => currentDocument.id !== document.id);
        this.documentListChangedEvent.next(this.documents.slice());
      },
      error: (error) => {
        console.error('Could not delete the document.', error);
      },
    });
  }
}
