import React from 'react';
import { Header, Jumbotron, Footer } from 'watson-react-components';

// eslint-disable-next-line
const DESCRIPTION = 'Add a cognitive search and content analytics engine to applications to identify patterns, trends and actionable insights that drive better decision-making.';

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>Discovery Demo</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Discovery Demo" />
        <meta name="og:description" content={DESCRIPTION} />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <div id="root">
          {props.children}
        </div>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        <script type="text/javascript" src="js/bundle.js" />
        <script type="text/javascript" src="js/ga.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default Layout;
