import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [contenido, actualizarContenido] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/producto") //tambien se le puede cambiar el metodo post o get (tambien se le puede agregar delete)
      .then(datos => datos.json())  //si lo pones con texto te sale el json pero si es con .json solo puede pintar un  dato
      .then(datos => actualizarContenido(datos))
  }, [])
  return (

    contenido.map(clase => (
      <div>
        <h1>Tabla de clase</h1>
        <table>
          <tr>
            <td><h2>Clase</h2></td>
            <td><h2>Curso</h2></td>
            <td><h2>Ciclo</h2></td>
            <td><h2>Planta</h2></td>
            <td><h2>Alumnos</h2></td>
          </tr>
          <tr>
            <td><h3>{clase.clase}</h3></td>
            <td><h3>{clase.curso}</h3></td>
            <td><h3>{clase.ciclo}</h3></td>
            <td><h3>{clase.planta}</h3></td>
            <td><h3>{clase.alumnos}</h3></td>
          </tr>
        </table>
      </div>
    ))

  )
}

export default App
