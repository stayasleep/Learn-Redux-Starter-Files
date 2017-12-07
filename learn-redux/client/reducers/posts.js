import {INCREMENT_LIKES} from '../actions/types';

//es6 default params but can also declare above here as a var
function posts(state=[], action){
	console.log('pos',state,action);
	switch(action.type){
		case INCREMENT_LIKES:
			const i = action.index;
			return [
				...state.slice(0,i), //Obj before our target
				{...state[i], likes: state[i].likes +1}, //the targeted obj in the array
				...state.slice(i+1) //Objs after the target
			]
		default:
			return state;
	}
}

export default posts;