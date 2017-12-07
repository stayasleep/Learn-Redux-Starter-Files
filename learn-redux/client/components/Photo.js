import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';


const Photo = (props) => {
	return (
		<figure className="grid-figure">
			<div className="grid-photo-wrap">
				<Link to={`view/${props.post.code}`}>
					<img src={props.post.display_src} alt={props.post.caption} className="grid-photo"/>
				</Link>
				{/*I believe this was removed from react and is now in react-transition-group*/}
				<CSSTransitionGroup
					transitionName="like"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					{/*key  = individual state prop...as we update state from pic the heart will auto re render and do CSS stuff*/}
					<span key={props.post.likes} className="likes-heart">{props.post.likes}</span>
					
				</CSSTransitionGroup>
			</div>
			<figcaption>
				<p>{props.post.caption}</p>
				<div className="control-buttons">
					<button onClick={()=>props.increment(props.i)} className="likes">&hearts; {props.post.likes}</button>
					<Link className="button" to={`/view/${props.post.code}`}>
						<span className="comment-count">
							<span className="speech-bubble"></span>
							{props.comments[props.post.code] ? props.comments[props.post.code].length : 0}
						</span>
					</Link>
				</div>
			</figcaption>
		</figure>

	)
}

export default Photo;
