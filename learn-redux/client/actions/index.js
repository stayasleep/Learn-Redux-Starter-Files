import { INCREMENT_LIKES, ADD_COMMENT, REMOVE_COMMENT } from './types';
//our action creators

//increment likes
export function increment(index){
	console.log('incrementing',index);
	return{
		type: INCREMENT_LIKES,
		index: index
	}
}

//add comment
export function addComment(postId, author, comment){
	console.log('dispatch', postId, author);
	return{
		type: ADD_COMMENT,
		postId,
		author,
		comment
	}
}

//removes the comment element (i) from a particular post (postId)
export function removeComment(postId, i){
	return{
		type: REMOVE_COMMENT,
		i,
		postId
	}
}