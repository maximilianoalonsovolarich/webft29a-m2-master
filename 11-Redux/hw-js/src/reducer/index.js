const { INCREMENTO, DECREMENTO } = require('../action-types');

//[...state, new_state] -> concatenando
//{...state, new_state} -> copio state y reemplazo el valor de la prop contador 

const initialState = {
  contador: 0,
  owner: '',
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  switch(action.type){
    case INCREMENTO:
      //podría haber algún tipo de lógica como filter, map u otro, y luego lo asociamos a una propiedad de nuestro estado
      return {
        ...state, contador: state.contador + 1//el valor que tiene contador hasta el momento y le sumamos uno
      };
    case DECREMENTO:
        return {
          ...state, contador: state.contador - 1
      };
    default: //no olvidarse nunca del default
      return {...state}
  }  
}

module.exports = contador;