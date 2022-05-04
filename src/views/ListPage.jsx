// lists  Hogwarts houses (image, name)
// useLocation, useParams
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './List.css';

export default function ListPage() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHouses() {
      const res = await fetch('https://wizard-world-api.herokuapp.com/Houses');
      const results = await res.json();

      console.log(results);
      setHouses(results);
      setLoading(false);
    }
    console.log(location);
    fetchHouses();
  }, []);

  return (
    <>
      <h1>Hogwarts Houses</h1>
      {loading ? (
        <figure>
          <img
            src='./snitch_spinner.gif'
            alt='golden snitch buzzing around' 
          />
          <figcaption>Loading...</figcaption>
        </figure>
      ) : (
        <section>
          {houses.map((house) => (
            <article key={house.id}>
              <Link to={`/houses/${house.id}`}>
                <img
                  src={`./${house.name}.png`}
                  alt={`${house.name} house crest`}
                  />
              </Link>
            </article>
          ))}
        </section>
      )}
    </>
  );
}
