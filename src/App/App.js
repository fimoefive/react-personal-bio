import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
// import 'firebase/auth';
import firebaseConfig from '../helpers/apiKeys';
// import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getProjects } from '../helpers/data/projectData';

import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [admin, setAdmin] = useState(null);
  // const [loggedInUser, setLoggedInUser] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        getProjects().then((resp) => setProjects(resp));
      } else if (admin || admin === null) {
        setAdmin(false);
        // setLoggedInUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes admin={admin}
          project={projects}
          setProject={setProjects}
        />
      </Router>

    </div>
  );
}

export default App;
