//20220815173804

export function getMovies(title) {
  return function(dispatch){
    return fetch(`http://omdbapi.com/?apikey=d1dcdf9c&s=${title}`)
    .then(response => response.json())
    .then(movies => dispatch({type: 'GET_MOVIES', payload: movies}))
  }
}

export function getMovieDetail(id) {
  return function(dispatch){
    return fetch(`http://omdbapi.com/?apikey=d1dcdf9c&si=${id}`)
    //con axios no convierto a json pero si tengo que usar .data
    .then(response => response.json())
    .then(detail => dispatch({type: 'GET_MOVIE_DETAIL', payload: detail}))
  }
}

export function addMovieFavorite(title){
  return{ 
    type: 'ADD_MOVIE_FAVORITE',
    payload: title
  }
}

export function removeMovieFavorite(id){
  return{
    type: 'REMOVE_MOVIE_FAVORITE',
    id
  }
}