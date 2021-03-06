import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import { addProject, updateProject } from '../helpers/data/projectData';

const ProjectForm = ({
  formTitle,
  setProjects,
  projectName,
  gitHub,
  languages,
  firebaseKey,
}) => {
  const [project, setProject] = useState({
    projectName: projectName || '',
    gitHub: gitHub || '',
    languages: languages || '',
    firebaseKey: firebaseKey || null,
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
      updateProject(project).then(setProjects);
    } else {
      addProject(project).then((response) => {
        setProjects(response);
        history.push('/students');
      });
      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   if (project.firebaseKey) {
      //     updateProject(project).then(setProjects);
      //     // updateProject(project).then((projectArray) => setProjects(projectArray));
      //   } else {
      //     // createProject(project).then((response) => setProjects(response));
      //     addProject(project).then((response) => {
      //       setProjects(response);
      //       history.push('/projects');
      //     });

      // Clears Input Fields
      setProject({
        projectName: '',
        gitHub: '',
        languages: '',
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
          <Label for="projectName">Project Name: </Label>
          <Input
            name='projectName'
            id='projectName'
            value={project.projectName}
            type='text'
            placeholder='Enter Project Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="gitHub">GitHub: </Label>
          <Input
            name='gitHub'
            id='gitHub'
            value={project.gitHub}
            type='url'
            placeholder='Enter GitHub URL'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="languages">Languages: </Label>
          <Input
            name='languages'
            id='languages'
            value={project.languages}
            type='text'
            placeholder='List Languages'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
        {/* <Button type='submit' onClick={handleSubmit}>Submit</Button> */}
      </Form>
    </div>
  );
};

ProjectForm.propTypes = {
  formTitle: PropTypes.string,
  setProjects: PropTypes.func,
  projectName: PropTypes.string,
  gitHub: PropTypes.string,
  languages: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default ProjectForm;
