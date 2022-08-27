import React from 'react';
import { Route } from 'react-router-dom';
import './Cards.css';
import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      <Route
      {... cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
          />
          )}
          /> 
    </div>
  );
}
