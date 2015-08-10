/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var crypto = require('crypto');

// Other oauthtypes to be added

/*
 User Schema
 */

var UserSchema = new mongoose.Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String,
  tokens: Array,
  profile: {
    name: {type: String, default: ''},
    gender: {type: String, default: ''},
    location: {type: String, default: ''},
    website: {type: String, default: ''},
    picture: {type: String, default: ''}
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  google: {}
});


/**
 * Password hash middleware.
 */
UserSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) return next();
  // TODO: use bind or arrow function
  bcrypt.genSalt(5, function (err, salt) {
    if (err) return next(err);
    // TODO: move to a separate func
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

/*
 Defining our own custom document instance method
 */
UserSchema.methods = {
  comparePassword: function (candidatePassword, callbackFunction) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) return callbackFunction(err);
      callbackFunction(null, isMatch);
    })
  }
};

/**
 * Statics
 */

UserSchema.statics = {};


module.exports = mongoose.model('User', UserSchema);