import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();
const linkToUse = Math.random() < 0.5;

ReactDOM.render(
  <Router history={history}>
   <Route path='/discord' component={() => { 
	window.location.href = 'https://discord.gg/K9KKDqd'; 
	return null;
   }}/>
   <Route path='/twitter' component={() => { 
	window.location.href = 'https://twitter.com/YTVanced'; 
	return null;
	}}/>
   <Route path='/adguard' component={() => { 
	window.location.href = 'https://adguard.com/?aid=31141'; 
	return null;
	}}/>
     <Route path='/tv' component={() => { 
	window.location.href = 'https://smartyoutubetv.github.io/'; 
	return null;
	}}/>
       <Route path='/ios' component={() => { 
	window.location.href = 'https://github.com/qnblackcat/uYouPlus'; 
	return null;
	}}/>
    <Route path='/brave' component={() => { 
        if (linkToUse) {
		window.location.href = 'https://brave.com/cge651'; 
        } else {
		window.location.href = 'https://brave.com/raz074';
	}
	return null;
    }}/>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
