import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyA0H78nwpYFijWWdEtLcq8BrtVUbwJgIdc",
  authDomain: "evernote-clone-266ae.firebaseapp.com",
  projectId: "evernote-clone-266ae",
  storageBucket: "evernote-clone-266ae.appspot.com",
  messagingSenderId: "35283152401",
  appId: "1:35283152401:web:ed11c2760ddcfa9fdf4bb0",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
