var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

console.log('Loaded!');

var count = 10;
app.get('/count', function (req, res) {
  count = count + 1;    
  res.send(count.toString());
  console.log(count);
});