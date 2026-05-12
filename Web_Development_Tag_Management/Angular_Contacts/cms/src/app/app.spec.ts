// This imports TestBed from Angular.
// TestBed helps create a testing environment for Angular components.
import { TestBed } from '@angular/core/testing';

// This imports the main App component that we want to test.
import { App } from './app';

// These imports bring all the components used by the App component.
// They are needed because App uses these components in its template.
import { Header } from './header';
import { Contacts } from './contacts/contacts';
import { ContactList } from './contacts/contact-list/contact-list';
import { ContactDetail } from './contacts/contact-detail/contact-detail';
import { Documents } from './documents/documents';
import { DocumentList } from './documents/document-list/document-list';
import { DocumentDetail } from './documents/document-detail/document-detail';
import { Messages } from './messages/messages';
import { MessageList } from './messages/message-list/message-list';
import { MessageItem } from './messages/message-item/message-item';
import { MessageEdit } from './messages/message-edit/message-edit';

// This creates a test group for the App component.
describe('App', () => {

  // This runs before each test.
  beforeEach(async () => {

    // This sets up the testing module for the App component.
    await TestBed.configureTestingModule({

      // This declares the App component and all components used in its template.
      declarations: [
        App,
        Header,
        Contacts,
        ContactList,
        ContactDetail,
        Documents,
        DocumentList,
        DocumentDetail,
        Messages,
        MessageList,
        MessageItem,
        MessageEdit,
      ],
    }).compileComponents();
  });

  // This test checks if the App component is created correctly.
  it('should create the app', () => {

    // This creates a test version of the App component.
    const fixture = TestBed.createComponent(App);

    // This gets the actual App component class instance.
    const app = fixture.componentInstance;

    // This expects the app component to exist.
    expect(app).toBeTruthy();
  });

  // This test checks the default view when the app starts.
  it('should start with the documents view', async () => {

    // This creates a test version of the App component.
    const fixture = TestBed.createComponent(App);

    // This waits until the component is stable before checking values.
    await fixture.whenStable();

    // This gets the actual App component class instance.
    const app = fixture.componentInstance;

    // This expects selectedFeature to start as documents.
    expect(app.selectedFeature).toBe('documents');
  });
});