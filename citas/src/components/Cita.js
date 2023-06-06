import React from 'react'
import { useState } from 'react';
import Formulario from './Formulario';

function Cita({lista, eliminar}) {

 
  return (
    <>
      {lista.map( (cita) => (
    <div className="cita">
    <p>Mascota: <span>{cita.mascota}</span></p>
    <p>Dueño: <span>{cita.propietario}</span></p>
    <p>Fecha: <span>{cita.fecha}</span></p>
    <p>Hora: <span>{cita.hora}</span></p>
    <p>Sintomas: <span>{cita.sintomas}</span></p>
    <button onClick={() => eliminar(cita.id)} className="button eliminar u-full-width">Eliminar ×</button>

        </div>
      ))}
    </>
  )
}

export default Cita;