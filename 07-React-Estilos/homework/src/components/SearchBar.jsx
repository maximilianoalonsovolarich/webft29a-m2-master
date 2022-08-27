import React from 'react';
import style from '../components/styles/Search.module.css';

export default function SearchBar(props) {
  
  // acá va tu código
  return (
    <div className={style.contenedor}>
    <input type="text" placeholder="City"></input>
    {/* siempre que necesito pasarle una función, la encierro en una arrowfunction */}
    <button onClick={props.onSearch} classname={style.btn}>Search</button>
    </div>
  )
};