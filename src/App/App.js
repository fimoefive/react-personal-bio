import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [admin, setAdmin] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
      } else if (admin || admin === null) {
        setAdmin(false);
        setLoggedInUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>

    </div>
  );
}

export default App;
