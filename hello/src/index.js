import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello'
import Clock from './Clock'
import Props from './Props'
import State from './share/State'
import Events from './share/Events'
import Lists from './share/Lists'
import * as serviceWorker from './serviceWorker';


ReactDOM.render( <Lists/> ,
 document.getElementById('root'));
serviceWorker.unregister();







