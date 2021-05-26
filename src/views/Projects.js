import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import ProjectCard from '../components/ProjectCard';
import ProjectForm from '../forms/ProjectForm';
// import './viewStyles/projects.scss';

function Projects({
  admin, projects, setProjects
}) {
  const [showAddProject, setAddProject] = useState(false);

  const handleClick = () => {
    setAddProject((prevState) => !prevState);
  };

  return (
    <div className="proView">
      <div className="card-container">
        <div>
          {!showAddProject
            ? <Button className="addPrjBtn" onClick={handleClick}>Add Project</Button>
            : <div>
              <Button className="closeForm" onClick={handleClick}>Close Form</Button>
              <ProjectForm
                setProjects={setProjects}
                admin={admin}
              />
            </div>
          }
        </div>
        {/* {projects.length && projects.map((proInfo) => ( */}
        {projects.map((proInfo) => (
          <ProjectCard className="proCard"
            key={proInfo.firebaseKey}
            firebaseKey={proInfo.firebaseKey}
            projectName={proInfo.projectName}
            gitHub={proInfo.gitHub}
            languages={proInfo.languages}
            setProjects={setProjects}
            admin={admin}
          />
        ))}
      </div>
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  admin: PropTypes.bool
};

export default Projects;
