import React from 'react'
import dbImagenes from '../../data/arrays/imagenes'
import { Vistaprev_foto_galeria } from '../vistas/vistaprev_foto_galeria'

export const Galeria_Inicio = () => {
  return (
    <div className='Galeria-PageInicio'>
        <div className='Galeria-PageInicio-Contenido'>
            <div className='Galeria-PageInicio-Contenido__imgs'>
              
              {
                dbImagenes.map( (element, index) => {
                  return <Vistaprev_foto_galeria elemento={element} key={index} /> 
                })
              }

                
            </div>

            <div className='Galeria-PageInicio-Contenido__informacion'>
                
                  <h2>Nuestra Galeria de fotos</h2>

                   <p>Dejate llevar, encuentra ese hogar que tanto quieres, te ofrecemos una
                    galeria de fotos para que busques lo que mas te guste, si no esta disponible 
                    lo estara luego asi que no te olvides de guardarlo
                </p>
          
               <a href="entrada.html" className="boton boton--primario GALERIA_INICIO__boton">Ver Galeria</a>
               
               
            </div>

        </div>
    </div>
  )
}
