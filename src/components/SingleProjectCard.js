import React from 'react';
import PropTypes from 'prop-types';

function SingleProjectCard({ children, project }) {
  return (
    <div>
      <h2>Project: {project.projectName}</h2>
      {children}
      <footer>&#169; 2021</footer>
    </div>
  );
}

SingleProjectCard.propTypes = {
  children: PropTypes.any,
  project: PropTypes.object
};

export default SingleProjectCard;
