import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
	posts,
	comments
};

//needs rootReducer and a default state to hydrate
const store = createStore(rootReducer, defaultState);

//sync browser history from different posts we visit with our store so we can access it on react router as the state at the time
export const history = syncHistoryWithStore(browserHistory, store);

//accept hot reload and re require reducer so we can get modules to refresh themselves instead page refresh

if(module.hot){
	module.hot.accept('./reducers/',() => {
		//cannot use es6 import inside a function
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	})
}


export default store;