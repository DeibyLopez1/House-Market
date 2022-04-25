import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Contacts} from '../contacts/MapsContacto'
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
           

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
    
                        to="/casas"
                    >
                        Casas
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/apartamentos"
                    >
                       Apartamentos
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/busqueda"
                    >
                        Busqueda Rapida
                    </NavLink>
                </div>
            </div>

       
        </nav>
    )
}