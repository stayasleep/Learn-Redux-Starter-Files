import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';


const Single = (props) => {
	console.log('single props',props);
	//loop over the array and find the index of the post we are viewing
	const i = props.posts.findIndex((post)=>post.code === props.params.postId);
	return(
		<div className="single-photo">
			<Photo i={i} post={props.posts[i]} {...props} />
			<Comments postComments={props.comments[props.params.postId] || []}/>
		</div>
		
	)
}

export default Single;