const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const sequenceGenerator = require('../sequenceGenerator');

// GET returns every message in the collection.
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({ message: 'Messages fetched successfully.', messages });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

// POST creates a new message and assigns its readable id.
router.post('/', async (req, res) => {
  try {
    const maxMessageId = await sequenceGenerator.nextId('messages');
    const message = new Message({
      id: maxMessageId.toString(),
      subject: req.body.subject,
      msgText: req.body.msgText,
      sender: req.body.sender,
    });
    const createdMessage = await message.save();
    res.status(201).json({
      message: 'Message added successfully.',
      createdMessage: createdMessage
    });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

// PUT updates one message.
router.put('/:id', async (req, res) => {
  try {
    const message = await Message.findOne({ id: req.params.id });
    if (!message) {
      return res.status(404).json({ message: 'Message not found.' });
    }
    message.subject = req.body.subject;
    message.msgText = req.body.msgText;
    message.sender = req.body.sender;
    const updatedMessage = await message.save();
    res.status(200).json({
      message: 'Message updated successfully.',
      updatedMessage: updatedMessage
    });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

// DELETE removes one message by its readable id.
router.delete('/:id', async (req, res) => {
  try {
    const message = await Message.findOneAndDelete({ id: req.params.id });
    if (!message) {
      return res.status(404).json({ message: 'Message not found.' });
    }
    res.status(200).json({ message: 'Message deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error });
  }
});

module.exports = router;
