const users = {};

function getUsers(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  if (request.method === 'GET') {
    response.write(JSON.stringify(users));
  }
  response.end();
}

function getNotFound(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  if (request.method === 'GET') {
    response.write(`
      {
        id: "notFound",
        message: "The page you are looking for was not found."
      }
      `);
  }
  response.end();
}

function addUser(responseBody) {
  if (!responseBody.name || !responseBody.age) {
    response.writeHead(400, { 'Content-Type': 'application/json' });
    response.write(`
      {
        id: "notFound",
        message: "Missing name and/or age parameters."
      }
      `);
      response.end();
  }
  else {
    let status;
    if (users[responseBody.name]) {
      status = 
    }
    response.writeHead(status, { 'Content-Type': 'application/json' });
    users[responseBody.name] = {name: responseBody.name, age: responseBody.age};
  }
}
