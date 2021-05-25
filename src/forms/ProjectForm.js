import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { addProject, updateProject } from '../helpers/data/projectData';

function PlayerForm({
  formTitle,
  setProjects,
  name,
  firebaseKey,
  user
}) {
  const [project, setProject] = useState({
    name: name || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => ({
    setProject((prevState)({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
};

const history = useHistory();

const handleSubmit = (e) => {
  e.preventDefault();
  if (project.firebaseKey) {
    updateProject(project, user).then((projectArray) => setProjects(projectArray));
  } else {
    addProject(project, user).then((response) => {
      setProjects(response);
      history.push('/projects');
    });

    setProject({
      name: '',
      firebaseKey: null
    });
  }
};

return (
  <div className='project-form'>
    <Form
      id='addProjectForm'
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <h2>{formTitle}</h2>
    </Form>
  </div>
);
};
