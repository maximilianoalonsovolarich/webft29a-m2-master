import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';


class Movie extends React.Component {
  //tomo el valor del id
  componentDidMount(){
    //tomamos el valor de la url
    const movieID = this.props.match.params.id
    //hacemos la búsqueda
    this.props.getMovieDetail(movieID) // --> se despatcha la accion y se llena el estado de movieDetail
  }

  render() {
    return (
      <div className="movie-detail">
          <h1>{this.props.movie.Title}</h1>
          <h2>{this.props.movie.Year}</h2>
          <h2>{this.props.movie.Rated}</h2>
          <h2>{this.props.movie.Released}</h2>
          <h2>{this.props.movie.Genre}</h2>
          {/* <img src={this.props.movie.Poster} /> */}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movie: state.getMovieDetail
  }
}

function mapDispatchToProps(dispatch){
  return{
    getMovieDetail: movieID => dispatch(getMovieDetail(movieID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);