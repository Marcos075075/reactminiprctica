import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DoctoresEspecialidad extends Component {

  selectEspecilidades = React.createRef();
  urlDoctores = Global.urlDoctores;

  cargarEspecialidades = () => {
    let request = "/api/Doctores/Especialidades/";
    axios.get(this.urlDoctores + request).then((respuesta) => {
      console.log("Leyendo especialidades");
      this.setState({
        especialidades: respuesta.data
      })
    })
  }

  mostrarDoctores = (e) => {
    e.preventDefault();
    let request = "api/Doctores/DoctoresEspecialidad/"
    axios.get(this.urlDoctores + request + this.selectEspecilidades.current.value).then((respuesta) => {
      console.log("Leyendo doctores");
      this.setState({
        doctores: respuesta.data
      })
      
    })
  }


  state = {
    especialidades: [],
    doctores: []
  }

  componentDidMount = () => {
    this.cargarEspecialidades();
  }

  render() {
    return (
      <div>
        <h1>Doctores Especialidad</h1>
        <form>
          <label>Seleccione la especialidad</label>
          <select ref={this.selectEspecilidades}>
            {
              this.state.especialidades.map((esp, index) => {
                return (
                  <option key={index} value={esp}>{esp}</option>
                )
              })
            }
          </select>
          <button onClick={this.mostrarDoctores}>Buscar</button>
        </form>
        <ul>
          {
            this.state.doctores.map((doc, index) => {
              return (
                <li key={index}>
                  id: {doc.idDoctor}, Apellido: {doc.apellido}, salario: {doc.salario}, hospital id: {doc.idHospital}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
