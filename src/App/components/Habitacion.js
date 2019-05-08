import React from "react";

export default function Habitacion({habitacion}) {
  const estado = habitacion.ocupado ? 'Ocupado' : 'Disponible';
  const style = habitacion.ocupado ? {color:'red'} : {color: 'green'};
  return (
    <div>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={habitacion.imagen} width="300" height="100" alt={habitacion.nombre}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {habitacion.nombre}<i className="material-icons right">more_vert</i>
          </span>
          <p style={style}> {estado} 
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>{habitacion.nombre}
          </span>
          <p>{habitacion.descripcion}
          </p>
          <p>
            Usuario: {habitacion.usuario}
          </p>
          <p>
            Precio día: ${habitacion.precio}
          </p>
        </div>
      </div>
    </div>
  );
}
