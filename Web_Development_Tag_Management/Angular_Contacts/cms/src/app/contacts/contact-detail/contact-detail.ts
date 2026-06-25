// This imports the Angular tools needed to create a component and use ngOnInit.
import { Component, OnInit } from '@angular/core';

// These imports let this component read the id from the route.
import { ActivatedRoute, Params } from '@angular/router';

// This imports the Contact model.
// The model defines the structure of a contact object.
import { Contact } from '../contact.model';

// This imports the ContactService.
// The service lets this component get the selected contact by id.
import { ContactService } from '../contact.service';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show the contact detail component.
  selector: 'cms-contact-detail',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './contact-detail.html',

  // This connects this component with its CSS file.
  styleUrls: ['./contact-detail.css']
})

// This is the ContactDetail component class.
export class ContactDetail implements OnInit {
  // This variable stores the contact that matches the id in the route.
  contact: Contact | null = null;

  // The constructor injects the route and the ContactService.
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  // ngOnInit runs when Angular finishes creating this component.
  ngOnInit(): void {
    // Listen to the route parameters so the detail changes when a different contact is selected.
    this.route.params.subscribe((params: Params) => {
      // Get the contact id from the route.
      const id = params['id'];

      // Get the matching contact from the service.
      this.contact = this.contactService.getContact(id);
    });
  }
}
