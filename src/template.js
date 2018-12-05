import React from "react";

export default body =>
  `<!doctype html>
  <html>
    <head>
      <meta charSet="UTF-8" />
    </head>
    <body>
      <div id="app">${body}</div>
      <script src="/bundle.js" />
    </body>
  </html>`;
