const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const stylesheet = fs.readFileSync(`${__dirname}/../client/style.css`);

function getIndex(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  if (request.method === 'GET') {
    response.write(index);
  }
  response.end();
}

function getStylesheet(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  if (request.method === 'GET') {
    response.write(stylesheet);
  }
  response.end();
}

module.exports = {
  getIndex,
  getStylesheet,
};
