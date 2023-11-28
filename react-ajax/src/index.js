import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App.js';



//render the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
