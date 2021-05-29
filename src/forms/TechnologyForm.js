import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import { addTechnology, updateTechnology } from '../helpers/data/technologyData';

function TechnologyForm({
  formTitle,
  setTechnologies,
  techImage,
  techName,
  techURL,
  firebaseKey
}) {
  const [technology, setTechnology] = useState({
    techImage: techImage || '',
    techName: techName || '',
    techURL: techURL || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setTechnology((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (technology.firebaseKey) {
      updateTechnology(technology).then(setTechnologies);
      // updateProject(project).then((projectArray) => setProjects(projectArray));
    } else {
      // createProject(project).then((response) => setProjects(response));
      addTechnology(technology).then((response) => {
        setTechnologies(response);
        history.push('/technologies');
      });
      setTechnology({
        techImage: '',
        techName: '',
        techURL: '',
        firebaseKey: null
      });
    }
  };

  return (
    <div className='technology-form'>
      <Form
        id='addTechnologyForm'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>

        <FormGroup>
          <Label for="projectName">Icon: </Label>
          <Input
            name='techImage'
            id='techImage'
            value={technology.techImage}
            type='text'
            placeholder='Enter Icon'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="techName">Tech Name: </Label>
          <Input
            name='techName'
            id='techName'
            value={technology.techName}
            type='text'
            placeholder='Enter Tech Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="languages">Tech Link: </Label>
          <Input
            name='techURL'
            id='techURL'
            value={technology.techURL}
            type='text'
            placeholder='Enter URL'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

TechnologyForm.propTypes = {
  formTitle: PropTypes.string,
  setTechnologies: PropTypes.func,
  techImage: PropTypes.string,
  techName: PropTypes.string,
  techURL: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default TechnologyForm;
