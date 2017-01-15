function makeAjaxRequest(url, method = 'GET') {
  return method;
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST')

// the method argument will be default to 'GET' UNLESS you pass in a specific argument


function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser() {
  user.admin = true;

  return user;
}

createAdminUser(new User(generateId()));

const user = new User(generateId);
createAdminUser(user);
