import React from 'react'
import { Footer } from '../components/Footer/footer'
import { Vista_prev } from '../components/vistas/vista_prev'
import dbGalerias from '../data/arrays/galerias';


export const Galeria = () =>  {
  
  let cont = 1;
  return (
    <>
    <div className='All_Catalogo-page-contenido'>
    {
      dbGalerias.map( ( element, index ) => {
        return(  
          <Vista_prev elemento={element} key={index} />,
          <Vista_prev elemento={element} key={index} />,
          <Vista_prev elemento={element} key={index} />
        )
      })
      
    }
  </div>

  <div className='Cambiar-pagina'>
    
    <a className='boton_cambiar-pagina'>1</a>
    <a className='boton_cambiar-pagina '>2</a>
    <a className='boton_cambiar-pagina '>3</a>
    <a className='boton_cambiar-pagina '>4</a>
    <a className='boton_cambiar-pagina '>5</a>
    <a className='boton_cambiar-pagina '>6</a>
    <a className='boton_cambiar-pagina'>7</a>
    <a className='boton_cambiar-pagina '>+</a>
    
  </div>
  <Footer />  
    </>
  )
}

export default Galeria