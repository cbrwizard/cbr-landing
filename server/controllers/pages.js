/**
 * Pages controller index page
 * @module Express router index function
 */
const React = require('react');
require('babel/register')({
  stage: 1,
});

const reactApp = React.createFactory(require('./../../client/js/init'));

exports.index = function(req, res) {
  const reactHtml = React.renderToString(reactApp({}));

  res.render('pages/blank', {reactOutput: reactHtml});
};
