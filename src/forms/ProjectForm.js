import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { addProject, updateProject } from '../helpers/data/projectData';

function ProjectForm({
  formTitle,
  setProjects,
  name,
  firebaseKey
}) {
  const [project, setProject] = useState({
    name: name || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then((projectArray) => setProjects(projectArray));
    } else {
      addProject(project).then((response) => {
        setProjects(response);
        history.push('/projects');
      });

      // Clears Input Fields
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
        <FormGroup>
          <Label for="name">Name: </Label>
          <Input
            name='name'
            id='name'
            value={project.name}
            type='text'
            placeholder='Enter Project Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

ProjectForm.propTypes = {
  formTitle: PropTypes.string,
  setProjects: PropTypes.func,
  name: PropTypes.string,
  firebaseKey: PropTypes.string,
  admin: PropTypes.any
};

export default ProjectForm;
