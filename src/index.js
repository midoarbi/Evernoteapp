import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const firebase = require('firebase');
require('firebase/firestore');

  firebase.initializeApp({
    apiKey: "AIzaSyAclpV5OWv1HoSEmgUnMfFp8bRpMyflCRc",
    authDomain: "evernote-9be4f.firebaseapp.com",
    databaseURL: "https://evernote-9be4f.firebaseio.com",
    projectId: "evernote-9be4f",
    storageBucket: "evernote-9be4f.appspot.com",
    messagingSenderId: "374307296458",
    appId: "1:374307296458:web:f4bd934509f1957d095033"
  });


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
