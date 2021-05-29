import React from 'react';
import PropTypes from 'prop-types';

function SingleTechCard({ children, technology }) {
  return (
    <div>
      <h2>Technology: {technology.techName}</h2>
      {children}
      <footer>&#169; 2021</footer>
    </div>
  );
}

SingleTechCard.propTypes = {
  children: PropTypes.any,
  technology: PropTypes.object
};
