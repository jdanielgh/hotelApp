import React from "react";
import Alerta from "./Alerta.js";

export default function Filtro({ filtro }) {
  const tipoRef = React.createRef();
  const estadoRef = React.createRef();

  const onClickFiltro = () => {
    const tipo = tipoRef.current.value;
    const estado = estadoRef.current.value;
    filtro(tipo, estado);
  };

  return (
    <div className="row">
      <h6>Filtros</h6>
      <form className="col s12">
        <div className="row">
          <div className="col m11">
            <label>Habitación</label>
            <select ref={tipoRef} className="browser-default">
              <option value="todos">Todos</option>
              <option value="individual">Individual</option>
              <option value="pareja">Pareja</option>
              <option value="familiar">Familiar</option>
              <option value="multiple">Multiple</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col m11">
          <label>Estado de la habitación</label>
            <select ref={estadoRef} className="browser-default">
              <option value="0">Todos</option>
              <option value="1">Disponibles</option>
              <option value="2">Ocupados</option>
            </select>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          name="action"
          type="button"
          onClick={onClickFiltro}
        >
          Filtrar
          <i className="material-icons right">send</i>
        </button>
      </form>
      <Alerta/>
    </div>
  );
}
