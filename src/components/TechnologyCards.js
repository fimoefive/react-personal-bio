import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardTitle,
  CardLink
} from 'reactstrap';
import { deleteTechnology } from '../helpers/data/technologyData';
import TechnologyForm from '../forms/TechnologyForm';

function TechnologyCard({
  admin,
  firebaseKey,
  techImage,
  techName,
  techURL,
  setTechnologies
}) {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteTechnology(firebaseKey)
          .then(setTechnologies);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/technologies/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <div className="techCard">
      <CardBody>
        <CardTitle tag="h5">{techName}</CardTitle>
        <img src={techImage} alt="Tech card image" />
        <CardLink>{techURL}</CardLink>
        <Button color="warning" onClick={() => handleClick('view')}>View Project</Button>
        <Button className="deleteButton" onClick={() => handleClick('delete')}>Delete</Button>
        <Button className="editButton" onClick={() => handleClick('edit')}>Edit</Button>
        {editing
          && <TechnologyForm
            formTitle='Edit Technology'
            admin={admin}
            firebaseKey={firebaseKey}
            techName={techName}
            techImage={techImage}
            techURL={techURL}
            setTechnologies={setTechnologies}
          />
        }
      </CardBody>
    </div>
  );
}

TechnologyCard.propTypes = {
  admin: PropTypes.bool,
  firebaseKey: PropTypes.string,
  techName: PropTypes.string,
  techImage: PropTypes.string,
  techURL: PropTypes.string
};

export default TechnologyCard;
