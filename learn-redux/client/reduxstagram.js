import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
//webpack will generate css js file
import css from './styles/style.styl';
//import comps
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
//import store
import store, {history} from './store';

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}/>
			</Route>
		</Router>
	</Provider>
	,
	document.getElementById('root')
);
