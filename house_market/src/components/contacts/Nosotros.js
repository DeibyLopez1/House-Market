import React from 'react'
import LOGO_COMPLETO from '../../data/img/HOUSE_MARKET.png'

export const Nosotros = () => {
  return (
    <div className="nosotros_inicio">
      <div className="buscarXfiltros__informacion">
         <h1>Sobre nosotros</h1>
         <h5>BIENVENIDO A NUESTRA EMPRESA DE ALQUILER DE CASAS</h5>
      </div>

      <div className="sobre-nosotros__contenido">
         
         <div className="sobre-nosotros__contenido--informacion">
            <p>Queremos que las familias vivan mejor, para ello, ponemos a tu disposición funciones que te facilitan el proceso. Además de poder filtrar según tus preferencias, también te ayudamos destacando destinos que están cerca de ti. Esto se traduce no solo en herramientas que te ayudan a organizar tu hogar familiar, sino también en opciones de alojamiento para todos los bolsillos. Todo ello, unido a un excelente servicio de atención al cliente y a políticas de cancelación flexibles, por si cambias de planes.
            </p>
         </div>

         <div className="sobre-nosotros__contenido--logo">
            <img src={LOGO_COMPLETO} alt="LOGO" width="100%" height="100%"></img>
         </div>

      </div>
   </div>

  )
}
