import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardTitle,
  CardText,
  CardLink
} from 'reactstrap';
import { deleteProject } from '../helpers/data/projectData';
import ProjectForm from '../forms/ProjectForm';
// import './comStyles/proCard.scss';

function ProjectCard({
  admin,
  firebaseKey,
  projectName,
  gitHub,
  languages,
  setProjects
}) {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProject(firebaseKey)
          .then(setProjects);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/projects/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <div className="proCard">
      <CardBody>
        <CardTitle tag="h5">{projectName}</CardTitle>
        <CardLink href={gitHub}>GitHub Repo</CardLink>
        <br />
        <CardText>Languages: {languages}</CardText>
        <Button color="warning" onClick={() => handleClick('view')}>View Project</Button>
        <br />
        <Button className="deleteBtn" onClick={() => handleClick('delete')}>Delete</Button>
        <Button className="editBtn" onClick={() => handleClick('edit')}>Edit</Button>
        {editing
          && <ProjectForm
            formTitle='Edit Project'
            admin={admin}
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
  admin: PropTypes.bool,
  firebaseKey: PropTypes.string,
  projectName: PropTypes.string,
  gitHub: PropTypes.string,
  languages: PropTypes.string,
  setProjects: PropTypes.func
};

export default ProjectCard;
