import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
//import IcoMoon from 'react-icomoon';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
