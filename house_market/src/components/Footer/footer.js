import React from 'react'
import LOGO_COMPLETO from '../../data/img/HOUSE_MARKET.png'

export const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footer-contenido'>
                <div className='footer-contenido__about'>
                    <div className='footer-contenido--titulo centrar-texto'>
                        <div className="sobre-nosotros__contenido--logo">
                            <img src={LOGO_COMPLETO} alt="LOGO" width="100%" height="100%"></img>
                        </div>
                    </div>

                    

                </div>
                <div className='footer-contenido__categorias centrar-texto'>
                    <div className='footer-contenido--titulo centrar-texto'>
                        <h4 className='texto-blanco'>Departamentos</h4>
                    </div>
                    <div className='footer-contenido__categorias--opciones'>
                        <p>Francisco Morazan</p>
                        <p>La Ceiba</p>
                        <p>Choluteca</p>
                        <p>San Pedro Sula</p>
                        <p>Olancho</p>
                        <p>Valle</p>
                    </div>
                        
                </div>
               <p>GRUPO DE INDUSTRIA DEL SOFTWARE 2021 HOUSE MARKET</p>
            </div>
        </div>
    </>
  )
}
