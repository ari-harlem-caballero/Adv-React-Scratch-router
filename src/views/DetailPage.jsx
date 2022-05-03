//list Hogwarts House details (name, houseColors, founder, animal, element, ghost, traits(id/name))
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <>
      <Link to="/">Return to Home</Link>
      {loading ? (
        <figure>
        <img
          src='../snitch_spinner.gif'
          alt='golden snitch buzzing around' 
        />
        <figcaption>Loading...</figcaption>
      </figure>
      ) : (
      <section>
        <img
          src={`../${house.name}.png`}
          alt={`${house.name} house crest`}
        />
        <h2>{house.name}</h2>
        <p>Traits: {house.traits.name}</p>
        <p>Ghost: {house.ghost}</p>
        <p>Animal: {house.animal}</p>
        <p>Element: {house.element}</p>
      </section>
      )}
    </>
  )
}
