const apiMiddleware = store => next => action => {
  
  if (!action.apiPackage) return next(action);
  
  const { headers, body, method, url, parameters } = action.apiPackage;
  const { type } = action;
  const baseUrl = url || 'http://localhost:4000';
  const defaultHeaders = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

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
