/* Middleware that catches every API request and handle them */

const apiMiddleware = store => next => action => {
  
  if (!action.apiPackage) return next(action);
  
  const { headers, body, method, url, parameters } = action.apiPackage;
  const { type } = action;
  const baseUrl = url || 'http://localhost:4000';
  const defaultHeaders = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

  const { user, socket } = store.getState();

  next({
    type: `${type}_PENDING`,
  });

  fetch(`${baseUrl}/${parameters}`, {
    method: method || 'GET',
    headers: {
      ...defaultHeaders,
      ...headers
    },
    body: body || null
  })
  .then(res => res.json())
  .then(response => {
    /* NOTE: On every succesful call to the API, we request an update on the user's list thru socket.io */
    socket.emit('updateRequired', { user });
    store.dispatch({
      type: `${type}_SUCCESS`,
      response
    })
  })
  .catch(error => {
    store.dispatch({
      type: `${type}_FAILURE`,
      error,
    });
    return next(action);
  });
};

export default apiMiddleware;
