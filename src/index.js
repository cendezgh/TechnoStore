import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBkh3tmvNDT8BaGwoVBg16i_AjqjufAOmg",
  authDomain: "technostore-ch.firebaseapp.com",
  projectId: "technostore-ch",
  storageBucket: "technostore-ch.appspot.com",
  messagingSenderId: "343497354536",
  appId: "1:343497354536:web:4ca24826a5f244b1fdb41d"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
