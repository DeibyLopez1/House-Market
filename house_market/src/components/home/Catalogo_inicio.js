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

        <Vista_prev elemento={dbProductos[0]} key={0} />
        <Vista_prev elemento={dbProductos[1]} key={1} />
        <Vista_prev elemento={dbProductos[2]} key={2} />
                
      </div>

      <a href="entrada.html" class="boton boton--primario catalogo__inicio--boton">Catalogo Completo</a>

   </div>
  )
}
