import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = (props) => {
  const { children, ...rest } = props;
  const isAuthorised = useSelector((state) => state.isAuthorised);
  return (
    <Route
      path={props.path}
      {...rest}
      render={({ location }) =>
        isAuthorised ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
