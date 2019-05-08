import React, { Component } from "react";
import Header from "./Header.js";
import Filtro from "./Filtro.js";
import Habitaciones from "./Habitaciones.js";
import Footer from "./Footer.js";
import Reserva from "./Reserva.js";
import { habitacionesMock } from "./../mocks/habitacion.mock.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-responsive-modal';

export default class Main extends Component {
  state = {
    habitaciones: habitacionesMock,
    habDisponibles: habitacionesMock.filter(hab => !hab.ocupado),
    habMostrar: habitacionesMock,
    mostrarReserva: true,
    open: false,
    habDesocupar: habitacionesMock[0]
  };

  filtrarHabitaciones = (tipoHabitacion, estado) => {
    switch(estado) {
      case '0':
        this.setState({habMostrar: this.state.habitaciones.filter( habitacion => habitacion.categoria[tipoHabitacion])});
        break;
      case '1':
        this.setState({habMostrar: this.state.habitaciones.filter( habitacion => !habitacion.ocupado && habitacion.categoria[tipoHabitacion])}); 
        break;
      case '2':
        this.setState({habMostrar: this.state.habitaciones.filter( habitacion => habitacion.ocupado && habitacion.categoria[tipoHabitacion])}); 
        break;
    }
  }

  cambiarEstadoReserva = (estado) => {
    const habDisponibles = estado ? this.state.habitaciones.filter( hab => !hab.ocupado ) : this.state.habitaciones.filter( hab => hab.ocupado );
    this.setState({mostrarReserva: estado, habDisponibles })
  }

  reservarHabitacion = (habitacion, dias, nombre) => {
    if (dias) {
        toast.success("Se ha reservado con éxito");
      const prueba = this.state.habitaciones.map( hab => {
        return hab.nombre === habitacion ? {...hab, dias, ocupado: true, usuario: nombre} : hab;
      });
      const habDispo = prueba.filter( hab => !hab.ocupado )
      this.setState({habitaciones: prueba, habMostrar: prueba, habDisponibles: habDispo});
    } else {
        toast.warn('Debe ingresar los datos obligatorios')
    }
  }

  desocuparHabitacion = (habitacion) => {
    const prueba = this.state.habitaciones.map( hab => {
      return hab.nombre === habitacion ? {...hab, dias: undefined, ocupado: false, usuario: undefined} : hab;
    });
    const habDispo = prueba.filter( hab => !hab.ocupado )
    const habDesocupar = this.state.habitaciones.find( hab => hab.nombre === habitacion);
    this.setState({habitaciones: prueba, habMostrar: prueba, habDisponibles: habDispo, habDesocupar});
    this.onOpenModal();
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const {open} = this.state;
    return (
      <div >
        <ToastContainer />
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col m4 row">
            <div className="row card-panel grey lighten-3">
              <div className="col m11">
                <Filtro filtro={this.filtrarHabitaciones}/>
              </div>
            </div>
            <div className="row card-panel grey lighten-3">
              <div className="col m11">
                <Reserva 
                  mostrar={this.state.mostrarReserva} 
                  reservarHabitacion={this.reservarHabitacion} 
                  cambiarEstadoReserva={this.cambiarEstadoReserva} 
                  habitaciones={this.state.habDisponibles} 
                  desocuparHabitacion={this.desocuparHabitacion}
                />
              </div>
            </div>
          </div>
          <div className="col m8">
            <Habitaciones habitaciones={this.state.habMostrar} />
          </div>
        </div>
        <div className="row card-panel teal lighten-1">
          <Footer />
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h4>Resumen de la cuenta</h4>
          <p>Habitación: {this.state.habDesocupar.nombre}</p>
          <p>Nombre: {this.state.habDesocupar.usuario}</p>
          <p>Días: {this.state.habDesocupar.dias}</p>
          <p>Saldo: ${this.state.habDesocupar.dias * this.state.habDesocupar.precio}</p>
          <button
          className="btn waves-effect waves-light right"
          type="button"
          name="action"
          onClick={this.onCloseModal}
        >
          Aceptar
        </button>
        </Modal>
      </div>
    );
  }
}
