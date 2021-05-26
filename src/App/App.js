import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
// import firebaseConfig from '../helpers/apiKeys';
import { getProjects } from '../helpers/data/projectData';

import './App.scss';

const adminUIDs = [
  process.env.REACT_APP_ADMIN_MJ
];

function App() {
  const [admin, setAdmin] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && adminUIDs.includes(authed.uid)) {
        setAdmin(true);
        // getProjects().then((resp) => setProjects(resp));
      } else if (admin || admin === null) {
        setAdmin(false);
      }
    });
  }, []);

  useEffect(() => {
    getProjects().then((resp) => setProjects(resp));
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar admin={admin} />
        <Routes admin={admin}
          projects={projects}
          setProject={setProjects}
        />
      </Router>
    </div>
  );
}

export default App;
