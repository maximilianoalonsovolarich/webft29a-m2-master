const initialState = {
  moviesFavorites: [],
  moviesLoaded: [],
  movieDetail: {} 
};

//de la action llegó: {type: 'GET_MOVIES', payload: movies}

//como buena práctica todo lo que modificamos en el estado está en el reducer
export default function rootReducer(state = initialState, action){
  switch(action.type){
    case 'GET_MOVIES': 
    return {
      ...state, 
      moviesLoaded: action.payload.Search
    };
    case 'GET_MOVIE_DETAIL':
      return {
        ...state,
        movieDetail: action.payload
    };
    case 'ADD_MOVIE_FAVORITE':
      return {
        ...state,
        //también válido con spread operator, importante concatenar no pisar porque sino se pierden los favoritos actuales
        // [...state.moviesFavorites, action.payload]
        moviesFavorites: state.moviesFavorites.concat(action.payload)
      };
    case 'REMOVE_MOVIE_FAVORITE':
      return{
        ...state,
        moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.id)
      };

    default: 
      return {...state};
  }
}

// si una acción se despacha pero el estado no cambia, el problema es del reducer