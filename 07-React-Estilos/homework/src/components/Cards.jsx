import React from 'react';
import Card from './Card.jsx';
import style from './styles/Cards.module.css'

export default function Cards(props) {
  //props = {cities}
  // tip, podés usar un map
  return (
    <div className={style.contenedor}>
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