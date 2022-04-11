import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
       <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
    </div>
  );
};

export default Actors;
