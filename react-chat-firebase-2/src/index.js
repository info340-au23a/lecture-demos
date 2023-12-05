import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import App from './components/App';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAhTQt_fGFbh2iYYW-ZrDRRThlIDuKnF0",
  authDomain: "react-chat-au23.firebaseapp.com",
  databaseURL: "https://react-chat-au23-default-rtdb.firebaseio.com",
  projectId: "react-chat-au23",
  storageBucket: "react-chat-au23.appspot.com",
  messagingSenderId: "7643423861",
  appId: "1:7643423861:web:09313bc162062ecf79443c"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>    
);