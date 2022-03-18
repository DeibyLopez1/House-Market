import React from 'react'
import { Filtros_catalogo } from '../components/catalogos/Filtros_catalogo'
import { Footer } from '../components/Footer/footer'
import { Header } from '../components/Header/header'
import { Banner_page } from '../components/vistas/Banner_page'
import { Vista_prev } from '../components/vistas/vista_prev'
import dbProductos from '../data/arrays/productos';

export const All_catalogo = () => {

  let cont = 1;

  return (
    <>
      <Header />

      <Banner_page Page={"CATALOGO"}/>

      <Filtros_catalogo />

      <div className='All_Catalogo-page-contenido'>
        {
          dbProductos.map( ( element, index ) => {
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
