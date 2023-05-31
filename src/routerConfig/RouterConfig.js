import { Navigate } from 'react-router-dom';

const RouterConfig = ({ isAuthenticated, redirectTo, element }) => {
    console.log(isAuthenticated)
  if (isAuthenticated) {
    return element;
  } else {
    return <Navigate to={redirectTo} replace />;
  }
};

export default RouterConfig;
