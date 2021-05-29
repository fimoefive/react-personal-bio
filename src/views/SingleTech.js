import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleTechCard from '../components/SingleTechCard';
import { getSingleTechnology } from '../helpers/data/technologyData';

export default function SingleTech() {
  const [technology, setTechnology] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleTechnology(firebaseKey)
      .then(setTechnology);
  }, []);

  return (
    <div>
      <SingleTechCard technology={technology}>
        <h2>{technology.techImage}</h2>
        <h3>{technology.techName}</h3>
        <h3>{technology.techURL}</h3>
      </SingleTechCard>
    </div>
  );
}
