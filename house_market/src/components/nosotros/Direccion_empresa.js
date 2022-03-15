import React from 'react'
import {Maps} from '../vistas/Maps'
import ubicacion from '../../data/img/icons8-siguiente-ubicación-40.png'
import correo_empresa from '../../data/img/icons8-email-40.png'
import llamada from '../../data/img/icons8-devolución-de-llamada-40.png'
import social_empresa from '../../data/img/icons8-usuario-hombre-verificado-40.png'

export const Direccion_empresa = () => {
  return (
    <div className="Direccion-empresa">
      <div className="Direccion-empresa-info">
        <h1>Disponibles</h1>
        <h1>para usted 24/7</h1>
        <p>NUESTROS SERVICIOS DE SOPORTE EN LÍNEA 24 HORAS</p>
      </div>
      <div className="Direccion-empresa-contenido">
        <div className="Direccion-empresa-contenido__mapa">
            <Maps />
        </div>
        <div className="Direccion-empresa-contenido__info">
          <div className="Direccion-empresa-contenido__casillainfo centrar-texto">
            
            <div className="row">
              <img src={ubicacion} height="50px" width="50px"></img>
              <h3 className="texto-primario fuente-playfair"> DIRECCIÓN</h3>
            </div>

            <p>Tegucigalpa, Colonia Aatrox, Edificio FVS, oficina 14</p>
            
    
          </div>

          <div className="Direccion-empresa-contenido__casillainfo centrar-texto">
            
            <div className="row">
              <img src={correo_empresa} height="50px" width="50px"></img>
              <h3 className="texto-primario fuente-playfair"> CORREO</h3>
            </div>

            <p>HOUSE_MARKET@gmail.com <br></br>hm_contacto@outlook.com</p>

          </div>

          <div className="Direccion-empresa-contenido__casillainfo centrar-texto">
            
            <div className="row">
              <img src={llamada} height="50px" width="50px"></img>
              <h3 className="texto-primario fuente-playfair">LLAMADA</h3>
            </div>

            <p>+504 2214-xx8x</p>
            
    
          </div>

          <div className="Direccion-empresa-contenido__casillainfo centrar-texto">
            
            <div className="row">
              <img src={social_empresa} height="50px" width="60px"></img>
              <h3 className="texto-primario fuente-playfair">SOCIAL</h3>
            </div>

            <p>aqui van las redes sociales</p>
            
    
          </div>
        </div>
      </div>
    </div>
  )
}

