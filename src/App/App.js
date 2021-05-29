import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
// import 'firebase/auth';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getProjects } from '../helpers/data/projectData';
import { getTechnologies } from '../helpers/data/technologyData';

import './App.scss';

const adminUIDs = [
  process.env.REACT_APP_ADMIN_MJ
];

function App() {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [admin, setAdmin] = useState(null);

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
    getTechnologies().then((resp) => setTechnologies(resp));
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar admin={admin} />
        <Routes admin={admin}
          projects={projects}
          setProjects={setProjects}
          technologies={technologies}
          setTechnologies={setTechnologies}
        />
      </Router>
    </div>
  );
}

export default App;
