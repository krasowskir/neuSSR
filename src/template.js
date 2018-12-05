import React from "react";

export default (body, gists) =>
  `<!doctype html>
  <html>
    <head>
      <meta charSet="UTF-8" />
    </head>
    <body>
      <div id="app">${body}</div>
      <script> window.gists = ${JSON.stringify(gists)}</script>
      <script src="/bundle.js" />
    </body>
  </html>`;
