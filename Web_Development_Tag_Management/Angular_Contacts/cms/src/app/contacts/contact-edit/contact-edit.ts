// This imports the Angular tools needed to create a component and use ngOnInit.
import { Component, OnInit } from '@angular/core';

// This imports NgForm so this component can read the form values.
import { NgForm } from '@angular/forms';

// These imports let this component read route parameters and navigate to another route.
import { ActivatedRoute, Params, Router } from '@angular/router';

// This imports the Contact model.
// The model defines the structure of a contact object.
import { Contact } from '../contact.model';

// This imports the ContactService.
// The service adds or updates contacts and notifies the list when data changes.
import { ContactService } from '../contact.service';

// This decorator tells Angular that this class is a component.
@Component({
  // This is the custom HTML tag used to show the contact edit component.
  selector: 'cms-contact-edit',

  // This means this component belongs to a module and is not standalone.
  standalone: false,

  // This connects this component with its HTML file.
  templateUrl: './contact-edit.html',

  // This connects this component with its CSS file.
  styleUrl: './contact-edit.css',
})

// This is the ContactEdit component class.
export class ContactEdit implements OnInit {
  // This stores the original contact before the user changes it.
  originalContact: Contact | null = null;

  // This stores the copy of the contact shown in the form.
  contact: Contact | null = null;

  // This stores the contacts that belong to a group contact.
  groupContacts: Contact[] = [];

  // This tells the component if it is adding a new contact or editing an old one.
  editMode: boolean = false;

  // This stores the id from the route when one exists.
  id: string | null = null;

  // The constructor injects the services this component needs.
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // ngOnInit runs when Angular creates this component.
  ngOnInit(): void {
    // Listen to the route parameters to know if an id was sent in the URL.
    this.route.params.subscribe((params: Params) => {
      // Get the id parameter from the route.
      this.id = params['id'];

      // If there is no id, the form is being used to add a new contact.
      if (!this.id) {
        this.editMode = false;
        this.originalContact = null;
        this.contact = null;
        this.groupContacts = [];
        return;
      }

      // If there is an id, try to find the original contact in the service.
      this.originalContact = this.contactService.getContact(this.id);

      // Stop if no contact was found for that id.
      if (!this.originalContact) {
        return;
      }

      // The form is editing an existing contact.
      this.editMode = true;

      // Clone the contact so the original is not changed until the user clicks Save.
      this.contact = JSON.parse(JSON.stringify(this.originalContact));

      // If this contact has a group, clone the group array too.
      if (this.contact?.group) {
        this.groupContacts = JSON.parse(JSON.stringify(this.contact.group));
      }
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

    // Use null when the contact does not have any group contacts.
    const group = this.groupContacts.length > 0 ? this.groupContacts : null;

    // Create a contact object from the form values.
    const newContact = new Contact('', value.name, value.email, value.phone, value.imageUrl, group);

    // Update the old contact when edit mode is on.
    if (this.editMode && this.originalContact) {
      this.contactService.updateContact(this.originalContact, newContact);
    } else {
      // Add a new contact when edit mode is off.
      this.contactService.addContact(newContact);
    }

    // Go back to the contacts page after saving.
    this.router.navigate(['/contacts']);
  }

  // This method removes one contact from the group list.
  onRemoveItem(index: number): void {
    // Remove only the contact at the selected position.
    this.groupContacts.splice(index, 1);
  }

  // This method runs when the user clicks Cancel.
  onCancel(): void {
    // Go back to the contacts page without saving changes.
    this.router.navigate(['/contacts']);
  }
}
