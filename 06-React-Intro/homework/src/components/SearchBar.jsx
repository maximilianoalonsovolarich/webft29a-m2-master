import React from 'react';

export default function SearchBar(props) {
  //props.onSearch = function(){}
  // acá va tu código
  return (
    <div>
    <input type="text"></input>
    {/* siempre que necesito pasarle una función, la encierro en una arrowfunction */}
    <button onClick={() => props.onSearch("Buscando...")}>Add</button>
    </div>
  )
};