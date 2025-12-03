import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <section className=' header'>
      
      <ul className="nav  nav-pills nav-fill">
        <h3 className='Logo'> E<span>MR</span></h3>
        <li className="nav-item">
          <Link to ="/"  className="nav-link active"> Home </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
        <button type="button" className="btn btn-secondary">
          <i className="bi bi-search"></i>
        </button>
        <Link to="/carrito" className='btn btn-light'>
          <i className="bi bi-cart3"></i>
          <span className="counter"> 0</span>
        </Link>

      </ul>
      
    </section>
  )
}

export default NavBar