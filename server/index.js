require('babel/register')({
  stage: 1,
});

var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var secrets = require('./config/secrets');

var app = express();

// Find the appropriate database to connect to, default to localhost if not found.
var connect = function () {
  mongoose.connect(secrets.db, function (err, res) {
    if (err) {
      console.log('Error connecting to: ' + secrets.db + '. ' + err);
    } else {
      console.log('Succeeded connected to: ' + secrets.db);
    }
  });
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Bootstrap passport config
//require('./config/passport')(app, passport);

// Bootstrap application settings
require('./config/express')(app);
// Bootstrap routes
require('./config/routes')(app);


app.listen(app.get('port'));