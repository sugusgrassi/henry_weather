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
<div className="navElement">
        <Link to='/henry_weather/' className="full-text">
          <span >
            Henry 🚀 Weather App
          </span>
        </Link>
        <Link to='/henry_weather/' className="short-text">
          <span >
            HWA 🚀
          </span>
        </Link>
</div>
<div className="navElement">
        <SearchBar
          className="navElement"
          onSearch={onSearch}
        />
</div>
    </nav>
  );
};

export default Nav;
