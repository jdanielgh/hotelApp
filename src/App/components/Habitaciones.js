import React from 'react'
import Habitacion from './Habitacion.js'

export default function Habitaciones({habitaciones}) {
  return (
    <div>
      {habitaciones.map( (habitacion, index) => (
        <div className="col m3">
          <Habitacion key={index} habitacion={habitacion}/>
        </div>
      ))}  
    </div>
  )
}
