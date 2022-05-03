//list Hogwarts House details (name, houseColors, founder, animal, element, ghost, traits(id/name))
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
  const [house, setHouse] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchHouse() {
      const res = await fetch(`https://wizard-world-api.herokuapp.com/Houses/${id}`);

      const houseData = await res.json();

      setHouse(houseData);
      setLoading(false);
    }

    fetchHouse();
  }, []);

  return (
    <div>Detail</div>
  )
}
