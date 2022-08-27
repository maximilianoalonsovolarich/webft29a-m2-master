import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//composeEnhancer sirve para implementar devtool

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;