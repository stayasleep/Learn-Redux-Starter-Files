import React from 'react';
import { render } from 'react-dom';
//webpack will generate css js file
import css from './styles/style.styl';
//import comps
import Main from './components/Main';

render(
	<Main/>,
	document.getElementById('root')
);
