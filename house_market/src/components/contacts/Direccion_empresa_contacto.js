import React from 'react'
import ubicacion from '../../data/img/icons8-siguiente-ubicación-40.png'
import correo_empresa from '../../data/img/icons8-email-40.png'
import llamada from '../../data/img/icons8-devolución-de-llamada-40.png'
import social_empresa from '../../data/img/icons8-usuario-hombre-verificado-40.png'

export const Direccion_empresa_contacto = () => {
    return (
    

      <div className="Direccion-empresa-fondo">
        <div className="container">
            <div className="Empresa-contacto-Pregunta">
                <div className="col">
                    <div className="Direccion-empresa-contacto-info">
                        <h1>Disponibles</h1>
                        <h1>para usted 24/7</h1>
                        <h3>NUESTROS SERVICIOS DE SOPORTE EN LÍNEA 24 HORAS</h3>
                    </div>
                </div>
            </div>

            <div>
                <div className="Direccion-empresa-contenido-contacto">
                    <div className="row">
                        <img src={ubicacion} height="50px" width="50px"></img>
                        <h3 className="texto-primario fuente-playfair"> DIRECCIÓN</h3>
                    </div>
                <p>Tegucigalpa, Colonia Aatrox, <br></br>Edificio FVS, oficina 14</p>
         
                <div className="row">
                    <img src={correo_empresa} height="50px" width="50px"></img>
                    <h3 className="texto-primario fuente-playfair"> CORREO</h3>
                </div>
                <p>HOUSE_MARKET@gmail.com <br></br>hm_contacto@outlook.com</p>
                
                <div className="row">
                    <img src={llamada} height="50px" width="50px"></img>
                    <h3 className="texto-primario fuente-playfair">LLAMADA</h3>
                </div>
                <p>+504 2214-xx8x</p>
         
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
  