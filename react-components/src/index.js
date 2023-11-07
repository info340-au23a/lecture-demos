import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App.js';
//now I have a App function 

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);