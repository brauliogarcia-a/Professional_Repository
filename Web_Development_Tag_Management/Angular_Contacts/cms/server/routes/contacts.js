const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const sequenceGenerator = require('../sequenceGenerator');

// GET returns contacts and replaces the saved group ids with the related contacts.
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().populate('group');
    res.status(200).json({ message: 'Contacts fetched successfully.', contacts });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

// POST creates a new contact. The group is optional for a normal contact.
router.post('/', async (req, res) => {
  try {
    const maxContactId = await sequenceGenerator.nextId('contacts');
    const contact = new Contact({
      id: maxContactId.toString(),
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      imageUrl: req.body.imageUrl,
      group: req.body.group || [],
    });
    const createdContact = await contact.save();
    res.status(201).json({ message: 'Contact added successfully.', contact: createdContact });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

// PUT updates one contact.
router.put('/:id', async (req, res) => {
  try {
    const contact = await Contact.findOne({ id: req.params.id });
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found.' });
    }
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.imageUrl = req.body.imageUrl;
    contact.group = req.body.group || [];
    const updatedContact = await contact.save();
    res.status(200).json({ message: 'Contact updated successfully.', contact: updatedContact });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

// DELETE removes one contact by its readable id.
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findOneAndDelete({ id: req.params.id });
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found.' });
    }
    res.status(200).json({ message: 'Contact deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

module.exports = router;
