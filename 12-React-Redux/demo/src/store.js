import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
//thunkMiddleware "mira" las consultas a la API que nos lo provee redux

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
//trabaja con la devtool que nos permite qué acciones se llevaron a cabo, es una variable definida en el entorno global

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
  //acá aplicamos el middleware directamente
);

export default store;
