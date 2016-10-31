var express = require('express');
 home = require('./routes/home.js'),
var app = express();
app.use(‘/’, home.index);
app.listen(3000);
In home.js
exports.index = function (req, res) {
  res.send('Index Page');
};
