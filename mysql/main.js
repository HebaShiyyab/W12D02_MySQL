const express = require('express');
require('dotenv').config()

const app = express();
const db = require('./db');
const users = require('./users');

app.get('/books',users.findAll);
app.post('/books',users.insertBook);
app.put('/books:book_id',updateBook);
app.delete('/books:book_id',deleteBook);



const PORT = 3000;
app.listen(port,()=>{
    console.log('server is working on http://localhost:'+PORT);
});