import React from 'react'

export const FormBuscar = () => {
  return (
    <div className="buscarXfiltros">
      <div className="buscarXfiltros__informacion">
         <h1>Para tarifas y disponibilidad</h1>
         <h4>Busca tu hogar</h4>
      </div>

      <div className="buscarXfiltros__form">

         <form className="buscarXfiltros__formulario">
            <div className="buscarXfiltros__formulario--campo">
               <label>ÁREA</label>
               <input type="text" name="ubicacion" placeholder="¿Donde quiere vivir?" className="buscarXfiltros__formulario--campo__input"></input>
            </div>
            <div className="buscarXfiltros__formulario--campo">
               <label>TIPO</label>
               <select name="tipo" placeholder="Apartamentos" className="buscarXfiltros__formulario--campo__input">
                  <option value="1">Apartamentos</option> 
                  <option value="2">Casas</option> 
               </select>
            </div>
            <div className="buscarXfiltros__formulario--campo">
               <label>PRECIO</label>
               <input type="text" name="precio_minimo" placeholder="Minimo" className="buscarXfiltros__formulario--campo__input"></input>
            </div>
            <div className="buscarXfiltros__formulario--campo">
               <label>PRECIO</label>
               <input type="text" name="precio_maximo" placeholder="Maximo" className="buscarXfiltros__formulario--campo__input"></input>
            </div>
            <div className="buscarXfiltros__formulario--campo">
               <label>PARA</label>
                <select name="Para" placeholder="Familia" className="buscarXfiltros__formulario--campo__input">
                  <option value="1">Familia</option> 
                  <option value="2">Pareja</option>
                  <option value="2">Individual</option>  
               </select>
            </div>

            
         </form>
         <a href="entrada.html" className="boton boton--primario buscarXfiltros__formulario--boton">Consultar disponibilidad</a>
      </div>

   </div>
  )
}
