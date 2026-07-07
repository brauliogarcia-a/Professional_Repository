// This helper creates the next readable id for a collection.
const Sequence = require('./models/sequence');

async function nextId(collectionType) {
  const propertyNames = {
    documents: 'maxDocumentId',
    messages: 'maxMessageId',
    contacts: 'maxContactId',
  };

  const propertyName = propertyNames[collectionType];
  if (!propertyName) {
    return -1;
  }

  // upsert creates the sequence document the first time it is needed.
  const sequence = await Sequence.findOneAndUpdate(
    {},
    { $inc: { [propertyName]: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  return sequence[propertyName];
}

module.exports = { nextId };
