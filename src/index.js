import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
	<Route path='/discord' component={() => { 
		window.location.href = 'https://discord.gg/K9KKDqd'; 
		return null;
   }}/>
   <Route path='/adguard' component={() => { 
	window.location.href = 'https://adguard.com/?aid=31141'; 
	return null;
	}}/>
	   <Route path='/brave' component={() => { 
	window.location.href = 'https://brave.com/cge651'; 
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
