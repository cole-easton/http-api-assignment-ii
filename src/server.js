const http = require('http');
const url = require('url');
const query = require('querystring');
const fileHandler = require('./fileHandler.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  switch (url.parse(request.url).pathname) {
    case '/':
    case '/index.html':
    case '/client.html':
    case '/client/client.html':
      fileHandler.getIndex(request, response);
      break;
    case '/style.css':
      fileHandler.getStylesheet(request, response);
      break;
    case '/addUser':
      parseBody(request, request, (req, res, bodyParams) => console.log(bodyParams));
      break;
    default:
      fileHandler.getIndex(request, response);
      break;
  }
};

const parseBody = (request, response, handler) => {
  const body = [];

  request.on('error', (err) => {
    console.dir(err);
    response.statusCode = 400;
    response.end();
  });

  request.on('data', (chunk) => {
    body.push(chunk);
  });

  request.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    const bodyParams = query.parse(bodyString);

    handler(request, response, bodyParams);
  });
};

http.createServer(onRequest).listen(port, () => { });