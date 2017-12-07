import React, {Component} from 'react';


class Comments extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		const { postId } = this.props.params;
		const author = this.author.value;
		const comment = this.comment.value;
		this.props.addComment(postId, author, comment)
		this.commentForm.reset();
	}

	handleRemove(postId, i){
		console.log('remove',postId,i);
		this.props.removeComment(postId, i);
	}

	render(){
		console.log('this comment',this);

		return(
			<div className="comments">
				{this.props.postComments.map((comment,index) => {
				return (
					<div className="comment" key={index}>
						<strong>{comment.user}</strong>
						{comment.text}
						<button onClick={()=>this.handleRemove(this.props.params.postId, index)} className="remove-comment">&times;</button>
					</div>
				)
				})}
				<form onSubmit={this.handleSubmit} className="comment-form" ref={ el=> this.commentForm = el}>
					<input type="text" placeholder="author" ref={ el => this.author = el} />
					<input type="text" placeholder="comment" ref={ el => this.comment = el} />
					<input type="submit" hidden />
				</form>
			</div>

		)
	}
}
export default Comments; 

//can connect this component top redux or siimply continue to pass everything down