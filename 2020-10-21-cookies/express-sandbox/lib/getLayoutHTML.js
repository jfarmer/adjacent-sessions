function getLayoutHTML(content) {
  // Template strings can span multiple lines, making them
  // well-suited for, well, acting as templates.
  let html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Hello, world!</title>

        <link rel="stylesheet" href="/css/normalize.css">
        <link rel="stylesheet" href="/css/main.css">
      </head>
      <body>
        <section id="content">
          ${content}
        </section>
      </body>
    </html>
  `;

  return html;
}

module.exports = getLayoutHTML;
