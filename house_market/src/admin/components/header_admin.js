import React from 'react'

export const Header_admin = () => {
  return (
    <div>
        <nav class="navbar-admin-das">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Dashboard ADMIN</a>
                <div class="navbar-collapse" id="navbarNav">
                
                    <a class="nav-link active-admin-nav" aria-current="page" href="#">Ingresar</a>
                   
                    <a class="nav-link" href="#">Ventas</a>
                  
                    <a class="nav-link" href="#">Compras</a>
                   
                    <a class="nav-link" href="#">Peticiones</a>
                   
                </div>
            </div>
        </nav>
    </div>
  )
}
