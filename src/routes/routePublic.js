import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/front/Header';
import Footer from '../components/front/Footer';

const RoutePublic = ({ component: Component, isAuthenticated, to, ...rest }) => {
  document.getElementsByTagName('html')[0].className = "main-pages";
return <Route
    {...rest}
    render={props => (isAuthenticated ? <Redirect to={to} /> : 
      <>
      <Header/>
        <div id="page-content">
          <Component {...props} />
        </div>
      <Footer/>
      </>)
    }
  />
  };

RoutePublic.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  to: PropTypes.string,
};

RoutePublic.defaultProps = {
  to: '/private',
};

export default RoutePublic;