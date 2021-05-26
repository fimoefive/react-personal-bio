import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import { deleteProject } from '../helpers/data/projectData';
import ProjectForm from '../forms/ProjectForm';
// import './comStyles/proCard.scss';

function ProjectCard({
  firebaseKey,
  projectName,
  gitHub,
  languages,
  setProjects
}) {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProject(firebaseKey)
          .then(setProjects);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <div className="proCard">
      <CardBody>
        <CardTitle tag="h5">{projectName}</CardTitle>
        <CardText>{gitHub}</CardText>
        <CardText>{languages}</CardText>
        <Button className="deleteBtn" onClick={() => handleClick('delete')}>Delete</Button>
        <Button className="editBtn" onClick={() => handleClick('edit')}>Edit</Button>
        {editing
          && <ProjectForm
            formTitle='Edit Project'
            firebaseKey={firebaseKey}
            projectName={projectName}
            gitHub={gitHub}
            languages={languages}
            setProjects={setProjects}
          />
        }
      </CardBody>
    </div>
  );
}

ProjectCard.propTypes = {
  firebaseKey: PropTypes.string,
  projectName: PropTypes.string,
  gitHub: PropTypes.string,
  languages: PropTypes.string,
  setProjects: PropTypes.func
};

export default ProjectCard;
