import React from 'react';

export function validate(input){
  let error = {};
  if(!input.username){
    error.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)){
    error.username = "Username is invalid";
  }
  if(!input.password) {
    error.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    error.password = "Password is invalid";
  }
  return error;
}

//para trabajar con varios inputs lo hago así con los nombres de las propiedades que quiera, como username y password
export default function  Form() {
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  let [error, setError] = React.useState({});

  let handleInputChange = (e) => {
    //[e.target.name] //manipulamos ambos inputs con la misma func. obteniendo el nombre del atributo name del input que coincide con la propiedad del objeto estado
    setInput(prev =>  ({
      ...prev, // hacemos copia del obj anterior y agregamos otro
      [e.target.name] : e.target.value
    })) 

    //acá ya debe ir validando la que la info sea correcta
    let objError = validate({...input, [e.target.name]:e.target.value});
    setError(objError);
  };

  return (
    <form>
      <div>
        <label>Username:</label>
        <input 
        type={'text'} 
        value={input.username} 
        onChange={handleInputChange} 
        name={'username'} 
        className={error.username && 'danger'}
        />
        {
          error.username && (<p>{error.username}</p>)
        }
      </div>
      <div>
      <label>Password:</label>
      <input 
      type={'password'} 
      value={input.password} 
      onChange={handleInputChange} 
      name={'password'}
      className={error.password && 'danger'}
      />
      {
        error.password && (<p>{error.password}</p>)
      }
      </div>
    </form>
  )
}
