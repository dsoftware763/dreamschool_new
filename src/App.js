import React from 'reactn';
import { Switch, Router, Route } from 'react-router-dom';
import history from './modules/history';
import AdminRoute from './routes/adminRoute';
import AuthRoute from './routes/authRoute';
import AdminLayout from './components/admin/AdminLayout';
import ParentLayout from './components/parents/ParentLayout';
import EducatorLayout from './components/educator/EducatorLayout'
import RoutePublic from './routes/routePublic';
import Home from './pages/front/home';
import About from './pages/front/about';
import Educator from './pages/front/educator';
import Search from './pages/front/search';
import Partner from './pages/front/partner';

import Login from './pages/front/login';
import Signup from './pages/front/signup';
import NotFound from './pages/notFound';

import './assets/css/all.min.css';
import './assets/css/application.css';
import './assets/css/parent_css.css';
import './assets/css/sb-admin-2.css';

class App extends React.Component {
  render() {
    return (
        <Router history={history}>
        <Switch>
            <AdminRoute
              isAuthenticated={true}
              admin={true}
              path="/admin"
              component={AdminLayout}
            />
            
            <AuthRoute
              isAuthenticated={true}
              path="/parents"
              component={ParentLayout}
            />
            <AuthRoute
              isAuthenticated={true}
              path="/educators"
              component={EducatorLayout}
            />
            <RoutePublic
              isAuthenticated={false}
              path="/"
              exact
              component={Home}
            />
            <RoutePublic
              isAuthenticated={false}
              path="/about"
              exact
              component={About}
            />
            <RoutePublic
              isAuthenticated={false}
              path="/schools/:educator"
              exact
              component={Educator}
            />
            <RoutePublic
              isAuthenticated={false}
              path="/search"
              exact
              component={Search}
            />
            <RoutePublic
              isAuthenticated={false}
              path="/partner"
              exact
              component={Partner}
            />
            <RoutePublic
              isAuthenticated={false}
              path="/sign-in"
              exact
              component={Login}
            />
            <RoutePublic
              isAuthenticated={false}
              path="/register"
              exact
              component={Signup}
            />
            
            <Route component={NotFound} />
        </Switch>
        </Router>
    );
  }
}

export default App;
