// This class is the model for a document.
// A model helps define what information a document should have.
export class Document {

  // The constructor is used to create a new Document object.
  constructor(

    // This is the unique id of the document.
    public id: string,

    // This is the name or title of the document.
    public name: string,

    // This is the description of the document.
    public description: string,

    // This is the URL or link for the document.
    public url: string,

    // This stores child documents if this document has any.
    // It can also be null if the document does not have children.
    public children: Document[] | null

  ) {}
}
