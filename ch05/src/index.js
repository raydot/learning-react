import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Menu from './components/Menu'
import data from './data/recipes'

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Menu recipes={data} title="Delicious Recipes" />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


/* import React from 'react'
import { render } from 'react-dom'
import Menu from './components/Menu'
import data from './data/recipes'

window.React = React

// A call to ReactDOM.render to render our Menu into the current DOM
render(
  <Menu recipes={data} title="Delicious Recipes" />, document.getElementById("react-container")
) */