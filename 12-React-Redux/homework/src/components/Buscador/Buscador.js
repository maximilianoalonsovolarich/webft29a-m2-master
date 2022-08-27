import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from "../../actions";


export class Buscador extends Component {
  //acceder a props this.props.
  constructor(props) {
    super(props);
    this.state = { 
      title: ""
    };
  }
  handleChange(event) {
    //si dentro del estado hubieramos tenido otra prop hubieramos usado el spread operator
    //this.setState(prev => {...prev, title: event.target.value})
    this.setState({ title: event.target.value }); //setea un estado en el nuevo valor
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state; //hace un distractoring en this.state, por eso no dice this.state.title
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)} // mientras haya un evento le paso la definición de una función
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas, tenemos que considerar buscar en una api y eso se configura en el reducer */}
         {
          this.props.movies && this.props.movies.map(movie => (
            <div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                {movie.Title}
              </Link>
              <button onClick={()=> this.props.addMovieFavorite({
                title: movie.Title, 
                id: movie.imdbID
                })
              }>
                Favorite
                </button>
            </div>
          ))
         }
        </ul>
      </div>
    );
  }  
}
  
  function mapStateToProps(state) {
    return {
      movies: state.moviesLoaded
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getMovies: title => dispatch(getMovies(title)),
      addMovieFavorite: title => dispatch(addMovieFavorite(title))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

// COMPONENTE DE FUNCIÓN:
// export default function Buscador (props {prop1, prop2}){
//   //inicializo un estado:
//   // const [title, setTitle] = useState('valor inicial')
//   let handleChange = (e) => {
//     //cambio el title
//     setTitle(e.target.value'nuevo valor')
//   }
//   //cambia render en un componente de función por return
//   return(
//     return (
//       <div>
//         <h2>Buscador</h2>
//         <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
//           <div>
//             <label className="label" htmlFor="title">Película: </label>
//             <input
//               type="text"
//               id="title"
//               autoComplete="off"
//               value={title}
//               onChange={(e) => this.handleChange(e)} // mientras haya un evento le paso la definición de una función
//             />
//           </div>
//           <button type="submit">BUSCAR</button>
//         </form>
//         <ul>
//          {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
//         </ul>
//       </div>
//     );
//   )
// }



