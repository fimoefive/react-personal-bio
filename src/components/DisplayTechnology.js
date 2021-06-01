import React from 'react';
import PropTypes from 'prop-types';
import {
  CardBody,
  CardTitle,
  CardLink
} from 'reactstrap';

const DisplayTechnology = ({ technologies }) => {
  <div className="tech-Card">
    <CardBody>
      <CardTitle tag="h5">{technologies.techName}</CardTitle>
      <img height="200px" width="200px" src={technologies.techImage} alt="Tech card image" />
      <br />
      <CardLink href={technologies.techURL}>Link:</CardLink>
    </CardBody>
  </div>;
};

DisplayTechnology.propTypes = {
  technologies: PropTypes.object,
};

export default DisplayTechnology;
