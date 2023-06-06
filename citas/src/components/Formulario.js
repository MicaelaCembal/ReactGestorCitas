import { useState } from 'react';
import React from 'react'

function Formulario({agregarCita}) {
  
  const [contador, setContador] = useState(0); 
  
  function CrearCita(evento){
  evento.preventDefault();
  let newCita = 
    {
      id: contador,
      mascota : evento.target.mascota.value,
      propietario: evento.target.propietario.value,
      fecha: evento.target.fecha.value,
      hora: evento.target.hora.value,
      sintomas: evento.target.sintomas.value,
    }
     
    setContador(contador + 1)
  
  evento.target.mascota.value  = '';
  evento.target.propietario.value  = '';
  evento.target.fecha.value  = '';
  evento.target.hora.value  = '';
  evento.target.sintomas.value  = '';

  agregarCita(newCita)
}


  return (
    <>
   <form onSubmit={ (e) => CrearCita(e)}>
    <label>Nombre Mascota</label>
    <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" autoComplete="off" />
    <label>Nombre Dueño</label>
    <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" autoComplete="off"/>
    <label>Fecha</label>
    <input type="date" name="fecha" className="u-full-width" autoComplete="off" />
    <label>hora</label>
    <input type="time" name="hora" className="u-full-width" autoComplete="off" />
    <label>Sintomas</label>
    <textarea name="sintomas" className="u-full-width"></textarea>
    <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
</form>

</>
  )

}
export default Formulario;
