// This file defines the MongoDB model for documents.
const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  // id is the readable id used by the Angular application.
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, default: null },
  children: { type: [mongoose.Schema.Types.Mixed], default: [] },
});

module.exports = mongoose.model('Document', documentSchema);
