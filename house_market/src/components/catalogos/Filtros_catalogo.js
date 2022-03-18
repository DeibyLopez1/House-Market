import React from 'react'

export const Filtros_catalogo = () => {
  return (
    <div className='Catalogo-page-filtros'>
        <div className='Catalogo-page-filtros-contenido'>
            <div className='Catalogo-page-filtros-contenido__card--popular active'>
                <h4>Popular</h4>
            </div>
            <div className='Catalogo-page-filtros-contenido__card'>
                <h4>Fecha</h4>
                <p>Mas nuevo a Mas antiguo</p>
            </div>
            <div className='Catalogo-page-filtros-contenido__card'>
                <h4>Fecha</h4>
                <p>Mas Antiguo a Mas nuevo</p>
            </div>
            <div className='Catalogo-page-filtros-contenido__card'>
                <h4>precio</h4>
                <p>Bajo A Alto</p>
            </div>
            <div className='Catalogo-page-filtros-contenido__card'>
                <h4>precio</h4>
                <p>Alto A Bajo</p>
            </div>
           
        </div>
    </div>
  )
}
