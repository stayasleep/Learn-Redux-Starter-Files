// import {} from '../actions/types';

//es6 default params but can also declare above here as a var
function posts(state=[], action){
	console.log('pos',state,action);
	return state;
}

export default posts;