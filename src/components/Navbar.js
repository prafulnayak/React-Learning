import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

export default function NavBar(props){

  const navigationToPage = () =>{
    <Navigate to="/features"/>
  }

    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/forms">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

NavBar.propType = {title: PropTypes.string}