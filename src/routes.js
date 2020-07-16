import history from 'services/history';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'views/Login';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
