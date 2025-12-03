import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <section className=' header'>
      
      <ul className="nav  nav-pills nav-fill m-1 ">
        <h3 className='Logo'> E<span>MR</span></h3>
        <li className="nav-item ms-3 me-3">
          <Link to ="/"  className="nav-link active"> Home </Link>
        </li>
        <li className="nav-item ms-3 me-3">
          <a className="nav-link" href="#">Link</a>
        </li>
        
        <button type="button" className="btn btn-secondary">
          <i className="bi bi-search"></i>
        </button>
        <Link to="/carrito" className='btn btn-light ms-3 '>
          <i className="bi bi-cart3"></i>
          <span className="position-absolute top-1  right-2 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
              <span className="visually-hidden me-4">New alerts</span>
          </span>
        </Link>

      </ul>
      
    </section>
  )
}

export default NavBar