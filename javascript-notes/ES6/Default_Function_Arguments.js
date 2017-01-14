function makeAjaxRequest(url, method = 'GET') {
  return method;
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST')

// the method argument will be default to 'GET' UNLESS you pass in a specific argument
