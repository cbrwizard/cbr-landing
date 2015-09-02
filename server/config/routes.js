/**
 * Routes for express app
 */
var express = require('express');
var mongoose = require('mongoose');
var _ = require('lodash');
var Header = require('../../public/assets/header.server');
var App = require('../../public/assets/app.server');

//const locale = require("locale");
//const supported = ["en_US", "ru"];

module.exports = function (app) {

//// TODO: move it
//  const areIntlLocalesSupported = require('intl-locales-supported');
//
//  const localesMyAppSupports = [
//    'ru', 'en-US',
//  ];
//
//  if (global.Intl) {
//    // Determine if the built-in `Intl` has the locale data we need.
//    if (!areIntlLocalesSupported(localesMyAppSupports)) {
//      // `Intl` exists, but it doesn't have the data we need, so load the
//      // polyfill and replace the constructors with need with the polyfill's.
//      require('intl');
//      Intl.NumberFormat = IntlPolyfill.NumberFormat;
//      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
//    }
//  } else {
//    // No `Intl`, so use and load the polyfill.
//    global.Intl = require('intl');
//  }
//
//  app.use(locale(supported));

  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
  // TODO: probably remove, since it's for iso
  app.get('*', function (req, res, next) {
    var html = App(JSON.stringify(res.locals.data || {}), req.url);
    html = html.replace("TITLE", Header.title)
      .replace("META", Header.meta);

    //console.log("You asked for: " + req.headers["accept-language"] + "\n" +
    //"We support: " + supported + "\n" +
    //"Our default is: " + locale.Locale["default"] + "\n" +
    //"The best match is: " + req.locale + "\n");
    if (process.env.NODE_ENV === 'devhotloader') {
      html = html.replace("LINK", '');
    } else {
      html = html.replace("LINK", Header.link);
    }

    res.contentType = "text/html; charset=utf8";
    res.end(html);
  });

};