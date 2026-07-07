// This file defines the MongoDB model used to keep the next readable ids.
const mongoose = require('mongoose');

const sequenceSchema = new mongoose.Schema({
  maxDocumentId: { type: Number, required: true, default: 0 },
  maxMessageId: { type: Number, required: true, default: 0 },
  maxContactId: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model('Sequence', sequenceSchema);
