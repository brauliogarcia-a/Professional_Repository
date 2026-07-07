// This file starts the NodeJS server for the CMS application.
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Allow the Angular development server to call this local API from port 4200.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// Connect to the local MongoDB database before the API routes use it.
mongoose.connect('mongodb://localhost:27017/cms')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((error) => {
    console.log('Connection failed: ' + error);
  });


// Middleware helps the server read incoming requests and display request information.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// The Angular files can be served from the production build after running npm run build.
const angularBuildPath = path.join(__dirname, 'dist', 'cms', 'browser');
app.use(express.static(angularBuildPath));

// Import the API route files.
const appRoutes = require('./server/routes/app');
const messageRoutes = require('./server/routes/messages');
const contactRoutes = require('./server/routes/contacts');
const documentRoutes = require('./server/routes/documents');

// Each route file will receive the requests for its resource.
app.use('/', appRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/documents', documentRoutes);

app.listen(port, () => {
  console.log(`NodeJS server is running on port ${port}.`);
});

module.exports = app;
