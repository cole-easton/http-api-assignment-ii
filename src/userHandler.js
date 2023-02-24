const users = {};

function getUsers(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  if (request.method === 'GET') {
    response.write(JSON.stringify(users));
  }
  response.end();
}

function addUser(request, response, responseBody) {
  const responseBodyJSON = { id: '', message: '' };
  if (!responseBody.name || !responseBody.age) {
    responseBodyJSON.id = 'addUserMissingParams';
    responseBodyJSON.message = 'Name and age are both required.';
    response.writeHead(400, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(responseBodyJSON));
  } else if (users[responseBody.name]) { // User already exists; update age
    responseBodyJSON.id = 'updated';
    responseBodyJSON.message = `${responseBody.name}'s age updated successfully to ${responseBody.age}.`;
    users[responseBody.name].age = responseBody.age;
    response.writeHead(204, { 'Content-Type': 'application/json' });
  } else { // user not yet created -> create user
    users[responseBody.name] = { name: responseBody.name, age: responseBody.age };
    responseBodyJSON.id = 'created';
    responseBodyJSON.message = `New user ${responseBody.name} created successfully.`;
    response.writeHead(201, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(responseBodyJSON));
  }
  response.end();
}

module.exports = {
  getUsers,
  addUser,
};
