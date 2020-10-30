/*
=============================================================================
=============================================================================
                          File name : db.js
                          Author's name :Sai Krishna amaraneni
                          StudentID :301151074
                          App name :favourite book list  
=============================================================================
=============================================================================
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
