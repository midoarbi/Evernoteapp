import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const firebase = require('firebase');
require('firebase/firestore');

  firebase.initializeApp({
    apiKey: "Your_api_key",
    authDomain: "evernote-9be4f.firebaseapp.com",
    databaseURL: "Your_databse",
    projectId: "evernote-9be4f",
    storageBucket: "evernote-9be4f.appspot.com",
    messagingSenderId: "Msg_sender_id",
    appId: "1:Your_ipp_id"
  });


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
