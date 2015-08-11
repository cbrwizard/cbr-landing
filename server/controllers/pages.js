/**
 * Pages controller index page
 * @module Express router index function
 */
exports.index = function (req, res, next) {
  res.render('pages/index', {title: 'Express'});
};
