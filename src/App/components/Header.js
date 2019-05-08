import React from "react";

export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper teal lighten-1">
        <div className="col m6">
          <label htmlFor="" className="brand-logo">Hotel Mochilero</label>
        </div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="javascript:void()">
              Danielsinho<i className="material-icons right">account_circle</i>
            </a>
          </li>
          <li>
            <a href="javascript:void()">
              Cerrar sesión<i className="material-icons right">exit_to_app</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
