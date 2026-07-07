// This file defines the MongoDB model for messages.
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  // id is the readable id used by the Angular application.
  id: { type: String, required: true, unique: true },
  subject: { type: String, required: true },
  msgText: { type: String, required: true },
  // sender stores the id of the contact who sent the message.
  sender: { type: String, required: true, ref: 'Contact' },
});

module.exports = mongoose.model('Message', messageSchema);
