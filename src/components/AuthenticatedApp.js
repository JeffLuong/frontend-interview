import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Profile from './Profile';
import Repositories from './Repositories';
import {
  HOME_ROUTE,
  REPOSITORIES_ROUTE,
  PROFILE_ROUTE
} from '../constants/routes';

const AuthenticatedApplication = () => {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path={PROFILE_ROUTE} component={Profile} />
        <Route path={REPOSITORIES_ROUTE} component={Repositories} />
        <Route path={HOME_ROUTE} component={Home} />
        <Route path="*">
          <div>This path doesn't exist</div>
        </Route>
      </Switch>
    </div>
  );
};

export default AuthenticatedApplication;
