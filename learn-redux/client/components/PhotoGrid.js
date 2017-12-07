import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

const PhotoGrid = (props) => {
	console.log('photos',props);
	return(
		<div className="photo-grid">
				{/*{JSON.stringify(props.posts,null,' ')}*/}
				{/*Consider passing down only props that Photo needs, and not all of them*/}
				{props.posts.map((post, index) =>{
					return <Photo key={index} post={post} i={index} {...props}/>
				})}
			
		</div>
		
	)
}

export default PhotoGrid;