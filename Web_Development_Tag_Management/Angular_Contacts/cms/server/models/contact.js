// This file defines the MongoDB model for contacts.
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  // id is the readable id used by the Angular application.
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  imageUrl: { type: String, required: true },
  // group holds the database ids of the contacts that belong to this group.
  group: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
});

module.exports = mongoose.model('Contact', contactSchema);
