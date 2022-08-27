import React from 'react';
import style from '../components/styles/Card.module.css'

export default function Card(props) {
  // acá va tu código
  return (
    <div className={style.contenedor}>
      <button onClick = {props.onClose} className={style.btn}>X</button>
      <h4>{props.name}</h4>
      <div className={style.infoCont}>
        <div>
        <h6>Min</h6>
        <p>{props.min}</p>
      </div>
      <div>
      <h6>Max</h6>
        <p>{props.max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Weather app img'/>
    </div>
    </div>  
  )
};
