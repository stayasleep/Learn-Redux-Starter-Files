import { INCREMENT_LIKES, ADD_COMMENT, REMOVE_COMMENT } from './types';
//our action creators

//increment likes
export function increment(index){
	return{
		type: INCREMENT_LIKES,
		index: index
	}
}

//add comment
export function addComment(postId, author, comment){
	return{
		type: ADD_COMMENT,
		postId,
		author,
		comment
	}
}

//remove post comment
export function removeComment(postId, i){
	return{
		type: REMOVE_COMMENT,
		i,
		postId
	}
}