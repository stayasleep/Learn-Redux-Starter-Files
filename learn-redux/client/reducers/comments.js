import {ADD_COMMENT, REMOVE_COMMENT} from '../actions/types';

//es6 default params but can also declare above here as a var

//handles entire comment state
function comments(state=[], action){
	if(typeof action.postId !== 'undefined'){
		return {
			...state, //take the current state
			[action.postId]: postComments(state[action.postId],action) //overwrite this post obj with the updated one
		}
	}
	return state;
}

//handles updating for one comment array with objs from the above parent object
function postComments(state=[],action){
	switch(action.type){
		case ADD_COMMENT:
			return [...state, {user: action.author, text: action.comment}];
		case REMOVE_COMMENT:
			return [
				...state.slice(0,action.i), //before target
				...state.slice(action.i+1) //everything after deleted target
			];
		default:
			return state;
	}
	return state;
}

export default comments;