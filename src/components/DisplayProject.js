import React from 'react';
import PropTypes from 'prop-types';
import {
  CardBody,
  CardTitle,
  CardLink,
  CardText
} from 'reactstrap';

const DisplayProject = ({ projects }) => {
  <div className="tech-Card">
    <CardBody>
      <CardTitle tag="h5">{projects.projectName}</CardTitle>
      <br />
      <CardLink href={projects.gitHub}>GitHub Repo</CardLink>
      <CardText>Languages: {projects.languages}</CardText>
    </CardBody>
  </div>;
};

DisplayProject.propTypes = {
  projects: PropTypes.object,
};

export default DisplayProject;
