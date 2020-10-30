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

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
