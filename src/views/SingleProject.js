import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleProjectCard from '../components/SingleProjectCard';
import { getSingleProject } from '../helpers/data/projectData';

export default function SingleProject() {
  const [project, setProject] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleProject(firebaseKey)
      .then(setProject);
  }, []);

  return (
    <div>
      <SingleProjectCard project={project}>
        <h2>{project.projectName}</h2>
        <h3>{project.gitHub}</h3>
        <h3>{project.languages}</h3>
      </SingleProjectCard>
    </div>
  );
}
