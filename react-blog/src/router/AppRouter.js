import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from '../App';
import NewPost from '../components/NewPost';
import ShowPost from '../components/ShowPost';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/posts/new" component={NewPost} />
      <Route path="/posts/:id" component={ShowPost} />
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

export default AppRouter;
