import React from 'react'

export const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footer-contenido'>
                <div className='footer-contenido__about'>
                    <div className='footer-contenido--titulo centrar-texto'>
                        <h4 className='texto-blanco'>Sobre House Rent</h4>
                    </div>

                    <p>Queremos que las familias vivan mejor, para ello, ponemos a tu disposición funciones que 
                        te facilitan el proceso. Además de poder filtrar según tus preferencias, también te ayudamos
                        destacando destinos que están cerca de ti. Esto se traduce no solo en herramientas que te 
                        ayudan a organizar tu hogar familiar, sino también en opciones de alojamiento para todos 
                        los bolsillos. Todo ello, unido a un excelente servicio de atención al cliente y a políticas 
                        de cancelación flexibles, por si cambias de planes
                    </p>

                     <a href="entrada.html" className="boton boton--primario GALERIA_INICIO__boton">MAS</a>

                </div>
                <div className='footer-contenido__categorias'>
                    <div className='footer-contenido--titulo centrar-texto'>
                        <h4>Departamentos</h4>
                    </div>
                    
                    <ul>
                        <li>Francisco Morazan</li>
                        <li>La Ceiba</li>
                        <li>Choluteca</li>
                        <li>San Pedro Sula</li>
                        <li>Olancho</li>
                        <li>Valle</li>
                    </ul>
                
                </div>
                <div className='footer-contenido__integrantes'>
                     <div className='footer-contenido--titulo centrar-texto'>
                        <h4>GRUPO DE TRABAJO</h4>
                    </div>

                    <ul>
                        <li>David Zuniga</li>
                        <li>XX</li>
                        <li>xx</li>
                        <li>xx</li>
                        <li>xx</li>
                        <li>xx</li>
                    </ul>

                </div> 
            </div>
        </div>
    </>
  )
}
