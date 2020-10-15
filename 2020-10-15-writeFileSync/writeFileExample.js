// Node.js program to demonstrate the
// fs.writeFileSync() method

// Import the filesystem module
let fs = require('fs');

// We'll generate the content elsewhere and then pass it to this
// function in order to get the full page HTML.
function renderLayout(content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>Hello, world!</h1>
      <div id="content">
        ${content}
      </div>
    </body>
    </html>
  `;
}

// Save the filename we're writing to in a variable for two reasons:
//   1. Only have to edit one line if we want to write to another file
//   2. Impossible to make a typo / don't have remember the exact filename

let SITE_INDEX_FILE = 'site/index.html';

let foodStuff = ['potato', 'waffle', 'banana'];

let content = '';
content += '<ul>\n';

for (let i = 0; i < foodStuff.length; i += 1) {
  let foodName = foodStuff[i];

  content += `<li>${foodName}</li>\n`;
}

content += '</ul>\n';

let fullPage = renderLayout(content);

fs.writeFileSync(SITE_INDEX_FILE, fullPage);

console.log('File written successfully.');
console.log(`Open up ${SITE_INDEX_FILE} to see the contents`);
