// This class is the model for a contact.
// A model helps define what information a contact should have.
export class Contact {

  // The constructor is used to create a new Contact object.
  constructor(

    // This is the unique id of the contact.
    public id: string,

    // This is the name of the contact.
    public name: string,

    // This is the email of the contact.
    public email: string,

    // This is the phone number of the contact.
    public phone: string,

    // This is the image path used to show the contact picture.
    public imageUrl: string,

    // This stores child contacts if this contact is a group.
    // It can also be null if the contact does not have a group.
    public group: Contact[] | null

  ) {}
}
