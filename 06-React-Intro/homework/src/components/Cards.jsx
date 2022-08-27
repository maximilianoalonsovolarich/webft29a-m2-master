import React from 'react';
import Card from './Card.jsx';

export default function Cards(props) {
  //props = {cities}
  // tip, podés usar un map
  return (
    <div>
      {props.cities.map(c => 
        <Card
        max={c.main.temp_max}
        min={c.main.temp_min}
        name={c.name}
        img={c.weather[0].icon}
        onClose={() => alert(c.name)}
        />)}
    </div>
  )
};