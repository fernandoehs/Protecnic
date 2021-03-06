import React from 'react';
import { Link, NavLink,useHistory } from 'react-router-dom'
import { NavDropdown, Navbar,Nav, Container } from 'react-bootstrap'

export function NavHamb(){
    const history = useHistory();
   function logout() {
        localStorage.clear();
       // window.location.href = '/';
       history.pop='/registro';
    }
  return (
    <Navbar bg="light" expand="lg">
  
    <Navbar.Brand href="#home">Protecnic</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
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
                    to="/entaller"
                >
                    Taller
                </NavLink>
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/pormaterial"
                >
                    Material
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
                {/* <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/admin"
                >
                    Admin
                </NavLink> */}

                <div className="login" style={{paddingLeft : '15rem'}}>
            <ul className="navbar-nav ml-auto ">
            <NavLink
            activeClassName="active"
            className="nav-item nav-link" 
            exact
            to="/login"
           
        >
             
          {/* <button onCkick={logout}>
            ir a la home
          </button> */}
            Logout
        </NavLink>
            </ul>
        </div>
      </Nav>
    </Navbar.Collapse>
  
</Navbar>
)
};
export default NavHamb;
