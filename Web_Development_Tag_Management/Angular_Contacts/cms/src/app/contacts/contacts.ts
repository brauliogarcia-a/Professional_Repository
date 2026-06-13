// This imports the Angular tools needed to create a component and use lifecycle methods.
import { Component, OnDestroy, OnInit } from '@angular/core';

// This imports Subscription from rxjs.
// It lets us unsubscribe before this component is destroyed.
import { Subscription } from 'rxjs';

// This imports the Contact model.
// The model defines the structure of a contact object.
import { Contact } from './contact.model';

// This imports the ContactService.
// The service lets this component listen when a contact is selected.
import { ContactService } from './contact.service';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show this component.
  selector: 'cms-contacts',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './contacts.html',

  // This connects this component with its CSS file.
  styleUrl: './contacts.css',
})

// This is the Contacts component class.
export class Contacts implements OnInit, OnDestroy {
  // This variable keeps track of the contact selected by the user.
  // It starts as null because no contact is selected at the beginning.
  selectedContact: Contact | null = null;

  // This stores the subscription so we can unsubscribe later.
  subscription!: Subscription;

  // The constructor injects the ContactService into this component.
  constructor(private contactService: ContactService) {}

  // ngOnInit runs when Angular finishes creating this component.
  ngOnInit(): void {
    // Listen for the selected contact event from the service.
    this.subscription = this.contactService.contactSelectedEvent.subscribe((contact: Contact) => {
      // Save the selected contact so the detail component can display it.
      this.selectedContact = contact;
    });
  }

  // ngOnDestroy runs before Angular removes this component from memory.
  ngOnDestroy(): void {
    // Unsubscribe to avoid a memory leak.
    this.subscription.unsubscribe();
  }
}
