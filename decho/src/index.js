import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Components/App';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBMx6x5XAXXewtDpIwp2HKQL-qtghhKDF8",
  authDomain: "revrb-550da.firebaseapp.com",
  databaseURL: "https://revrb-550da.firebaseio.com",
  projectId: "revrb-550da",
  storageBucket: "revrb-550da.appspot.com",
  messagingSenderId: "1013414536475",
  appId: "1:1013414536475:web:592acfc269289112cf5fbe",
  measurementId: "G-H234B3CQFE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <UserForm /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
