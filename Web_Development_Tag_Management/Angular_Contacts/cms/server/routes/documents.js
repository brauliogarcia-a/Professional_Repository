const express = require('express');
const router = express.Router();
const Document = require('../models/document');
const sequenceGenerator = require('../sequenceGenerator');

// GET returns every document in the collection.
router.get('/', async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json({ message: 'Documents fetched successfully.', documents });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

// POST creates a new document and assigns its readable id.
router.post('/', async (req, res) => {
  try {
    const maxDocumentId = await sequenceGenerator.nextId('documents');
    const document = new Document({
      id: maxDocumentId.toString(),
      name: req.body.name,
      url: req.body.url,
      description: req.body.description,
      children: req.body.children || [],
    });
    const createdDocument = await document.save();
    res.status(201).json({ message: 'Document added successfully.', document: createdDocument });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

// PUT replaces the editable values of one document.
router.put('/:id', async (req, res) => {
  try {
    const document = await Document.findOne({ id: req.params.id });
    if (!document) {
      return res.status(404).json({ message: 'Document not found.' });
    }
    document.name = req.body.name;
    document.url = req.body.url;
    document.description = req.body.description;
    document.children = req.body.children || [];
    const updatedDocument = await document.save();
    res.status(200).json({ message: 'Document updated successfully.', document: updatedDocument });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

// DELETE removes one document by its readable id.
router.delete('/:id', async (req, res) => {
  try {
    const document = await Document.findOneAndDelete({ id: req.params.id });
    if (!document) {
      return res.status(404).json({ message: 'Document not found.' });
    }
    res.status(200).json({ message: 'Document deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

module.exports = router;
