import React from 'react';

import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';




// Con NavLink se puede agregar el parametro activeClassName="active" para darle estilo
// Link on NavLink lo que hace es cambiar la URL del navegador
// Con NavLink to='/' hay que agregar exact, sino siempre estará con el estilo activo
function Nav({onSearch}) {
  return (
    <nav className="navbar">
      <Link to='/'>
        <span className="navbar">
          Henry - Weather App
        </span>
      </Link>
      <Link to="/about">
        <span className="navlinks" style={{ textDecoration: 'none' }}>About</span>
      </Link>
      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
};

export default Nav;
