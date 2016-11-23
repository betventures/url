'use strict';

// DEPENDENCIES
var express = require('express');
var lookup = require('./utils/lookup');
var links = require('./config/links').links;

// INIT APP
var app = express();

// ROUTES
app.get('/:value', function(req, res, next) {
  var link = lookup(links, 'value', req.params.value);
  if(link) {
    res.redirect(link.url);
  } else {
    return next()
  }
  // res.json({ data: 'hey' });
});

// HANDLE ERRORS
app.use(function(req, res) {
  res.status(404);
  res.write('Invalid url. Please, verify you wrote it correctly.');
  res.end();
});

// SERVER LISTEN
app.listen(3000);
