import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

const AdminRoute = ({ component: Component, isAuthenticated, admin, to, ...rest }) => {
  document.getElementsByTagName('html')[0].className = "console-pages";
  return(
  <Switch>
    <Route
      {...rest}
      
      render={props =>
        (admin) ? (
          <div id="wrapper">
              <Component {...props} />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: to,
              state: { redirect: props.location.pathname, admin },
            }}
          />
        )
      }
    />
    </Switch>
);
}

AdminRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
};

AdminRoute.defaultProps = {
  to: '/',
};

export default AdminRoute;