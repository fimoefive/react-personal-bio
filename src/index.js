import React from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import firebaseConfig from './helpers/apiKeys';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

firebase.initializeApp(firebaseConfig);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    {/* <Router> */}
    <App />
    {/* </Router> */}
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
