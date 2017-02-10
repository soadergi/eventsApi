import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Events from './components/Events';
import EventDetailed from './components/EventDetailed';
import NotFound from './components/NotFound';

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='events' component={Events} />
      <Route path='events/event_detailed/:id' component={EventDetailed} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
