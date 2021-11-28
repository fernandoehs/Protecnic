import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export function Nav(){
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        
        <Link 
            className="navbar-brand" 
            to="/"
        >
            
        </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/registro"
                >
                    Registro
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/porllamar"
                >
                    Llamar
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/porvisitar"
                >
                    Visitar
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/busqueda"
                >
                    Busqueda
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/registrados"
                >
                    Registrados
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/mapfre"
                >
                    Mapfre
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/catalana"
                >
                    Catalana
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/ocaso"
                >
                    Ocaso
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/generali"
                >
                    Generali
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/admin"
                >
                    Admin
                </NavLink>
            </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/login"
                >
                    Logout
                </NavLink>
            </ul>
        </div>
    </nav>
)
};
export default Nav;