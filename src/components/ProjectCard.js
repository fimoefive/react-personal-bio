import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardTitle
} from 'reactstrap';
import { deleteProject } from '../helpers/data/projectData';
import ProjectForm from '../forms/ProjectForm';
// import './comStyles/proCard.scss';

function ProjectCard({
  user,
  firebaseKey,
  projectName,
  setProjects
}) {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProject(firebaseKey, user)
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
        <Button className="deleteBtn" onClick={() => handleClick('delete')}>Delete</Button>
        <Button className="editBtn" onClick={() => handleClick('edit')}>Edit</Button>
        {editing
          && <ProjectForm
            formTitle='Edit Project'
            user={user}
            firebaseKey={firebaseKey}
            projectName={projectName}
            setProjects={setProjects}
          />
        }
      </CardBody>
    </div>
  );
}

ProjectCard.propTypes = {
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  setProjects: PropTypes.func
};

export default ProjectCard;
