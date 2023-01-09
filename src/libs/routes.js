const BASE_ROUTE = '/';

export const routes = {
  home: { paths: [BASE_ROUTE] },
  /*
  survey: {
    paths: ['/survey/:questionId', '/results'],
    default: '/survey/1',
  },
  */
  lease: { paths: ['/lease/:leaseId'] },
  about: { paths: ['/about'] },
};

export const getPath = route => routes[route]?.paths[0] ?? BASE_ROUTE;

export const getParametrablePath = (route, params) => {
  const path = getPath(route);

  return Object.entries(params).reduce(
    (acc, [paramName, paramValue]) => acc.replace(new RegExp(`:${paramName}`), paramValue),
    path,
  );
};

export const getPaths = () => Object.keys(routes).map(route => getPath(route));

// For paramètrable paths
export const getDefaultPath = route => routes[route]?.default ?? getPath(route);
