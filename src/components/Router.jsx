import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DoctoresEspecialidad from './DoctoresEspecialidad'
import HomeComponent from './HomeComponent'


export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path='/doctores' element={<DoctoresEspecialidad />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
