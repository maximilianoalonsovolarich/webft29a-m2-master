import React from 'react';
import './Timer.css';


const Timer = () => {
  const [segundos, setSegundos] = React.useState(0);
  const [activo, setActivo] = React.useState(false);
  const [tipo, setTipo] = React.useState('Contador'); //contador y cuenta regresiva
  const myRef = React.useRef(null);


  React.useEffect(()=> {
    let intervalo = null;
    if(activo && tipo === 'Contador'){
      //el contador debe incrementarse en uno
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if(activo && tipo === 'Cuenta regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if(!activo && segundos !== 0 && tipo === 'Contador'){
      clearInterval(intervalo); 
    }
    if(segundos === 0 && tipo === 'Cuenta regresiva'){
      reset();
      clearInterval(intervalo);
    }
    //para que useEffect siga vivo, no se ejecuta hasta que el componente no se desmonte
    return () => clearInterval(intervalo);

  }, [activo, segundos, tipo]);

 
  function toggle(){
    setActivo(!activo);
  }
  function reset(){
    setSegundos(0);
    setActivo(false);
  }
  function cambioTipo(){
    tipo === 'Contador' ? setTipo('Cuenta regresiva') : setTipo('Contador');
  }
  function agregaSegundos(){
    let value = myRef.current.value; //reemplaza el e.target.value
    setSegundos(value);
  }
  
  return (
    <div className="app">
      <div className="time">
        {segundos}
      </div>
      <div className='row'>
        <button className={`button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toggle}>
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className='button-secondary' onClick={reset} >
          Reset
        </button>
      </div>
      <button className='button' onClick={cambioTipo}>{tipo}</button>
      {
        tipo === 'Cuenta regresiva' && 
        <input
        onChange={agregaSegundos}
        type='number' 
        ref={myRef} 
        placeholder='Ingresa segundos' 
        autoComplete='off'/>
      }
    </div>
  );
};

export default Timer;
