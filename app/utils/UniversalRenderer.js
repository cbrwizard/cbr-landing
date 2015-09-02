/**
 * UniversalRenderer was inspired by https://github.com/goatslacker/alt/blob/master/utils/IsomorphicRenderer.js
 *
 * Will work with webpack
 *
 * > The glue that it takes to render a react element isomorphically
 *
 * ** This util depends on iso and React **
 *
 * Usage:
 *
 * ```js
 * import universalRenderer from './utils/UniversalRenderer';
 * import alt from './alt';
 * import routes from './routes';
 * import html from './base.html';
 *
 * export default universalRenderer(alt, routes, html);
 * ```
 *
 * Note: If you do not pass in a html template, UniversalRenderer will render only the ReactElements
 *       for you.
 */
import Iso from 'iso';
import React from 'react';
import Router from 'react-router';

//import currentLocale from './../config/locales/current_locale';
//import localeData from './../config/locales/locale_data';

// We have a problem here with isomorphism and react-intl. Intl stuff is different on client
//  and on server always, that's why they cannot properly update in webpack.
// Find a way to ignore this difference or how to fix it in react-intl.
// do like it says here http://formatjs.io/guides/runtime-environments
// quote: Ways I've got around this in the past is for example when using Flux, I initialize clientside flux stores based on data json sent within the page html from the server which corresponds exactly to the data structure used to render on serverside. I render once with this data, and then I bootstrap my rest api connections afterward.

// Let's ignore it for now until we handle all other parts. If nothing helps, let's try switching to i18next.

/*
 * @param {AltObject} an instance of the Alt object
 * @param {ReactObject} routes specified in react-router
 * @param {Object} Data to bootstrap our altStores with
 * @param {String} url that react-router should route to
 */
const renderToMarkup = (alt, routes, state, url) => {
  let markup;

  Router.run(routes, url, (Handler) => {
    alt.bootstrap(state);
    const content = React.renderToString(<Handler />);
    markup = Iso.render(content, alt.flush());
  });
  return markup;
};

/*
 * @param {AltObject} an instance of the Alt object
 * @param {ReactObject} routes specified in react-router
 * @param {String} HTML template passed in
 * @return render function which can be executed on server/client side
 */
export default function UniversalRenderer(alt, routes, html) {
  let render;
  // if it is not a browser
  if (typeof window === 'undefined') {
    // if there is a html string passed in
    // render the markup and inject it into the html string
    if (html) {
      render = (state, url) => {
        const markup = renderToMarkup(alt, routes, state, url);
        return html.replace('CONTENT', markup);
      };
    } else {
      render = (state, url) => {
        return renderToMarkup(alt, routes, state, url);
      };
    }
  } else {
    render = Iso.bootstrap((state, _, container) => {
      alt.bootstrap(state);
      Router.run(routes, Router.HistoryLocation, (Handler) => {
        //const node = React.createElement(Handler);
        //React.render(node, container);
        React.render(<Handler />, container);
      });
    });
  }

  return render;
}
