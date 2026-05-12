// This class is the model for a message.
// A model helps define what information a message should have.
export class Message {

  // The constructor is used to create a new Message object.
  constructor(

    // This is the unique id of the message.
    public id: string,

    // This is the subject or title of the message.
    public subject: string,

    // This is the main text or content of the message.
    public msgText: string,

    // This is the person who sent the message.
    public sender: string

  ) {}
}