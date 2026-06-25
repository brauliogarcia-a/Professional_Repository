// This imports NgModule from Angular.
// NgModule is used to define this file as an Angular module.
import { NgModule } from '@angular/core';

// This imports the Angular Router tools.
// RouterModule makes the routing features available to the app.
// Routes is the type used to define the list of routes.
import { RouterModule, Routes } from '@angular/router';

// These are the main page components that the router can show.
import { Documents } from './documents/documents';
import { Messages } from './messages/messages';
import { Contacts } from './contacts/contacts';
import { DocumentDetail } from './documents/document-detail/document-detail';
import { DocumentEdit } from './documents/document-edit/document-edit';
import { ContactDetail } from './contacts/contact-detail/contact-detail';
import { ContactEdit } from './contacts/contact-edit/contact-edit';

// This array defines the main routes for the application.
// Each path is connected to the component that Angular should show.
const appRoutes: Routes = [
  // When the URL is empty, send the user to the documents page.
  { path: '', redirectTo: '/documents', pathMatch: 'full' },

  // This route shows the Documents component.
  // The child routes decide what appears on the right side of the Documents page.
  {
    path: 'documents',
    component: Documents,
    children: [
      { path: 'new', component: DocumentEdit },
      { path: ':id', component: DocumentDetail },
      { path: ':id/edit', component: DocumentEdit },
    ],
  },

  // This route shows the Messages component.
  { path: 'messages', component: Messages },

  // This route shows the Contacts component.
  // The child routes decide what appears on the right side of the Contacts page.
  {
    path: 'contacts',
    component: Contacts,
    children: [
      { path: 'new', component: ContactEdit },
      { path: ':id', component: ContactDetail },
      { path: ':id/edit', component: ContactEdit },
    ],
  },

  // If the user types a route that does not exist, send them back to documents.
  { path: '**', redirectTo: '/documents' },
];

// This decorator tells Angular that AppRoutingModule is an Angular module.
@NgModule({
  // RouterModule.forRoot() registers the routes for the main application.
  imports: [RouterModule.forRoot(appRoutes)],

  // Exporting RouterModule lets the rest of the app use routerLink and router-outlet.
  exports: [RouterModule],
})

// This exports the AppRoutingModule class so AppModule can use it.
export class AppRoutingModule {}
