// This imports NgModule from Angular.
// NgModule is used to define this file as an Angular module.
// provideBrowserGlobalErrorListeners helps Angular listen for browser errors.
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

// This imports BrowserModule.
// BrowserModule is needed because this Angular app runs in the browser.
import { BrowserModule } from '@angular/platform-browser';

// These are the components used in the application.
// App is the main component of the app.
import { App } from './app';

// Header is the component for the top part of the page.
import { Header } from './header';

// These components are related to the Contacts section.
import { Contacts } from './contacts/contacts';
import { ContactList } from './contacts/contact-list/contact-list';
import { ContactItem } from './contacts/contact-item/contact-item';
import { ContactDetail } from './contacts/contact-detail/contact-detail';

// These components are related to the Documents section.
import { Documents } from './documents/documents';
import { DocumentList } from './documents/document-list/document-list';
import { DocumentDetail } from './documents/document-detail/document-detail';
import { DocumentItem } from './documents/document-item/document-item';

// These components are related to the Messages section.
import { Messages } from './messages/messages';
import { MessageList } from './messages/message-list/message-list';
import { MessageItem } from './messages/message-item/message-item';
import { MessageEdit } from './messages/message-edit/message-edit';

// This directive is used to open and close the User dropdown menu.
import { DropdownDirective } from './dropdown.directive';

// This imports the routing module for the application.
// The routing module controls which main component is shown for each URL.
import { AppRoutingModule } from './app-routing.module';

// This decorator tells Angular that AppModule is an Angular module.
@NgModule({
  // Declarations are the components that belong to this module.
  declarations: [
    App,
    Header,
    Contacts,
    ContactList,
    ContactItem,
    ContactDetail,
    Documents,
    DocumentList,
    DocumentItem,
    DocumentDetail,
    Messages,
    MessageList,
    MessageItem,
    MessageEdit,
    DropdownDirective,
  ],

  // Imports are other modules that this module needs.
  // BrowserModule allows the app to run in a web browser.
  // AppRoutingModule allows the app to use Angular routing.
  imports: [BrowserModule, AppRoutingModule],

  // Providers are services or features available to the app.
  // This one helps handle global browser errors.
  providers: [provideBrowserGlobalErrorListeners()],

  // Bootstrap tells Angular which component starts the application.
  // App is the first component loaded when the app starts.
  bootstrap: [App],
})

// This exports the AppModule class so Angular can use it to start the app.
export class AppModule {}