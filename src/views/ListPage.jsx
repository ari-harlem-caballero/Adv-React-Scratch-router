// lists  Hogwarts houses (image, name)
// useLocation, useParams
import React, { useEffect, useState } from 'react'

export default function ListPage() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHouses() {
      const res = await fetch('https://wizard-world-api.herokuapp.com/Houses');
      const { results } = await res.json();

      setHouses(results);
      setLoading(false);
    }
    fetchHouses();
  }, []);

  return (
    <div>List</div>
  )
}
