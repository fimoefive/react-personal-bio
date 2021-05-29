import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import TechnologyCard from '../components/TechnologyCard';
import TechnologyForm from '../forms/TechnologyForm';

function Technologies({
  admin, technologies, setTechnologies
}) {
  const [showAddTech, setAddTech] = useState(false);

  const handleClick = () => {
    setAddTech((prevState) => !prevState);
  };

  return (
    <div className="techView">
      <div className="card-container">
        <div>
          {!showAddTech
            ? <Button className="addTechBtn" admin={admin} onClick={handleClick}>Add Technology</Button>
            : <div>
              <Button className="closeForm" admin={admin} onClick={handleClick}>Close Form</Button>
              <TechnologyForm
                setTechnologies={setTechnologies}
                admin={admin}
              />
            </div>
          }
        </div>

        {technologies.map((techInfo) => (
          <TechnologyCard className="techCard"
            key={techInfo.firebaseKey}
            firebaseKey={techInfo.firebaseKey}
            techName={techInfo.techName}
            techImage={techInfo.techImage}
            techURL={techInfo.techURL}
            setTechnologies={setTechnologies}
            admin={admin}
          />
        ))}
      </div>
    </div>
  );
}

Technologies.propTypes = {
  technologies: PropTypes.array,
  setTechnologies: PropTypes.func,
  admin: PropTypes.any
};

export default Technologies;
