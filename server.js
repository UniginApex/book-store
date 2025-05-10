const express = require('express');
const app = express();

// Replace this line:
// const router = require('router'); 

// With:
const booksRouter = require('./routes/books');
app.use('/api/books', booksRouter);