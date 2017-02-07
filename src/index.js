import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './containers/App';
import configureStore from './store/configureStore';
import Home from './components/Home'
import Events from './components/Events'
import NotFound from './components/NotFound'

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home} />
				<Route path='events' component={Events} />
			</Route>
			<Route path='*' component={NotFound} />
		</Router>
	</Provider>,
	document.getElementById('root')
);
