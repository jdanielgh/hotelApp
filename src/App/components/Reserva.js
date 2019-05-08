import React from "react";

export default function Reserva({
  mostrar,
  cambiarEstadoReserva,
  habitaciones,
  reservarHabitacion,
  desocuparHabitacion
}) {
  const nombreBoton = mostrar ? "Reservar" : "Desocupar";
  const operacionRef = React.createRef();
  const tipoHabRef = React.createRef();
  const nombreRef = React.createRef();
  const diasRef = React.createRef();

  const onChangeTypeRoom = () => {
    const operacion = operacionRef.current.value;
    cambiarEstadoReserva(operacion === "reservar");
  };

  const onClickReservar = () => {
    const tipo = tipoHabRef.current.value;
    if ( mostrar ) {
      const dias = diasRef.current.value;
      const nombreUsuario = nombreRef.current.value;
      reservarHabitacion(tipo, dias, nombreUsuario);
      nombreRef.current.value = "";
      diasRef.current.value = undefined;
    } else {
      desocuparHabitacion(tipo);
    }
  };

  return (
    <div>
      <h6>Gestión de habitaciones</h6>
      <form action="">
        <div className="row">
          <div className="col m12">
            <label>Tipo de Operación</label>
            <select
              ref={operacionRef}
              className="browser-default"
              onChange={onChangeTypeRoom}
            >
              <option value="reservar">Reservar</option>
              <option value="desocupar">Desocupar</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col m12">
            <label>Habitación a reservar</label>
            <select
              ref={tipoHabRef}
              className="browser-default"
              onChange={onChangeTypeRoom}
            >
              {habitaciones.map((hab, index) => (
                <option key={index} value={hab.nombre}>
                  {hab.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>
        {mostrar && (
          <div className="div">
            <div className="row">
              <div className="input-field col m12">
                <input
                  ref={nombreRef}
                  id="last_name"
                  type="text"
                  className="validate"
                />
                <label htmlFor="last_name">Nombres</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col m12">
                <input
                  ref={diasRef}
                  id="last_name"
                  type="number"
                  className="validate"
                />
                <label htmlFor="last_name">Días</label>
              </div>
            </div>
          </div>
        )}
        <button
          className="btn waves-effect waves-light"
          type="button"
          name="action"
          onClick={onClickReservar}
        >
          {nombreBoton}
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
}
