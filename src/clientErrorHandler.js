function getNotFound(request, response) {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  if (request.method === 'GET') {
    response.write(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>Error 404: Page not Found</title>
        </head>
        <body>
            <h1>Error 404: Page not Found</h1>
            <p></p>
        </body>
    </html>
        `);
  }
  response.end();
}

function getNotReal(request, response) {
  response.writeHead(404, { 'Content-Type': 'application/json' });
  if (request.method === 'GET') {
    response.write(
      JSON.stringify({
        id: 'notFound',
        message: 'The page you are looking for was not found.',
      }),
    );
  }
  response.end();
}

module.exports = {
  getNotFound,
  getNotReal,
};
