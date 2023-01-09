import compact from 'lodash/compact';
import isEmpty from 'lodash/isEmpty';
import { matchPath, useLocation } from 'react-router';

import { getPaths, routes } from '../../libs/routes';

const useRouter = () => {
  const { pathname: location } = useLocation();
  const paths = getPaths();
  const matchResult = compact(
    paths.map(_path =>
      matchPath(
        {
          path: _path,
          exact: true,
          strict: true,
        },
        location,
      ),
    ),
  );
  const [{ pathname: path, params }] = isEmpty(matchResult)
    ? [{ pathname: '', params: {} }]
    : matchResult;

  const isCurrent = route => (routes[route]?.paths ?? []).includes(path);

  return {
    isCurrent,
    location,
    path,
    params,
  };
};

export default useRouter;
