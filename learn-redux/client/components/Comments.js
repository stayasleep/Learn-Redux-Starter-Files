import React from 'react';

const Comments = (props) => {
	console.log('comms',props);
	return(
		<div className="comments">
			{props.postComments.map((comment,index) => {
				return (
					<div className="comment" key={index}>
						<strong>{comment.user}</strong>
						{comment.text}
						<button className="remove-comment">&times;</button>
					</div>
				)
			})}
			<form className="comment-form" ref>
				<input type="text" placeholder="author" />
				<input type="text" placeholder="comment" />
				<input type="submit" hidden />
			</form>
		</div>
	)
};

export default Comments; 