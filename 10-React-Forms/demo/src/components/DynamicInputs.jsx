import React, { useState } from 'react';

// Este es el Form con inputs dinamicos que armamos en el README.md de la teoria.

function DinamicInputs() {  
  const modeloFamiliar = { nombre: '' };
  const [familiar, setFamiliar] = useState([
    { ...modeloFamiliar },
    //familiar = [{nombre: ''}];
  ]);

  const [persona, setPersona] = useState({
    nombre: '',
    //persona = {nombre= ''}
  });

  const agregaFamiliar = () => {
      setFamiliar([...familiar, { ...modeloFamiliar }]);
  };
  //familiar = [{nombre: 'Martina'}] + {nombre: 'Walter'} => familiar = [{nombre: 'Martina'}, {nombre: 'Walter'}]

  const handlePersonaChange = (e) => setPersona({
    ...persona,
    [e.target.name]: e.target.value, //nombre: 'Walter'
  });
  //una copia del obj entero de persona y sobreescribí el valor que está entre [], en este caso [name]: 'Martina'

  const handleFamiliarChange = (e) => {
    const familiares = [...familiar];
    familiares[e.target.id][e.target.dataset.name] = e.target.value;
    setFamiliar(familiares);
  };

  const handleSubmit = e => {
    e.preventDefault()
    console.log(familiar) // -> familiar -> post db con la info de familiar
  }

  return (        
    <form onSubmit={handleSubmit}>            
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={persona.nombre}
        onChange={handlePersonaChange}
      />  
      <input
        type="button"
        value="Agrega un Familiar"
        onClick={agregaFamiliar}
      />
      {
      familiar.map((el, i) => (
        <div key={`persona-${i}`}>
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
          <input
              type="text"
              name={`nombre-${i}`}
              id={i}
              data-name="nombre"
              value={el.nombre}
              onChange={handleFamiliarChange}
          />
        </div>
      ))
      }
      <input type="submit" value="Submit" />        
    </form>   
  );
};

export default DinamicInputs;