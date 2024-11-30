import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" onClick={closeNavbar}>{props.title}</a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underlined">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" onClick={closeNavbar}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={closeNavbar}>About</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={closeNavbar}>Login</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link to="/cart" style={{ marginRight: '10px', padding: '12px' }} onClick={closeNavbar}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <input className="form-control me-2" type="search" placeholder="Find" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}