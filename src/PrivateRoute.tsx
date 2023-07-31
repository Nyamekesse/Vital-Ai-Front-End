import { Navigate, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import axiosInstance from './axios-instance';

function PrivateRoute({ element: Element, ...rest }) {
  const isLoggedIn = useQuery(
    'isLoggedIn',
    async () => {
      const { status } = await axiosInstance.get('/auth/check-authentication');
      return status === 200;
    },
    { staleTime: Infinity },
  );

  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Element /> : <Navigate to="/login" replace />}
    />
  );
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};
