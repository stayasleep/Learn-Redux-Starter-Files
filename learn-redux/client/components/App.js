import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import Main from './Main';

function mapStateToProps(state){
	return {
		posts: state.posts,
		comments: state.comments
	};
}


function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}
//this is the way it is written on the redux docs page
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
