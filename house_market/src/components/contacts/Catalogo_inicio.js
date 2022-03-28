import React from 'react'
import dbProductos from '../../data/arrays/productos';
import { Vista_prev } from '../vistas/vista_prev';

export const Catalogo_inicio = () => {
  return (
    <div className="Catalogo_inicio">
      
      <div className="buscarXfiltros__informacion">
         <h1>CASAS Y APARTAMENTOS</h1>
         <h5>ENCUENTRE SU NUEVO HOGAR, PARA SU CAPACIDAD</h5>
      </div>

      <div className="Catalogo_inicio__contenido">

        {
            dbProductos.map( (element, index) => {
                return <Vista_prev elemento={element} key={index} />
            })
        }          

         

      </div>

      <a href="entrada.html" class="boton boton--primario catalogo__inicio--boton">Catalogo Completo</a>

   </div>
  )
}
