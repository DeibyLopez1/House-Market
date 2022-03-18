import React from 'react'
import { Footer } from '../components/Footer/footer'
import { Header } from '../components/Header/header'

export const Error_404 = () => {
  return (
    <>
        <Header />

        <div className='Erro_404_page'>

            <div className='Erro_404_page--info'>
                <h1>404</h1>
            <h4>Page Not Found</h4>

            <a className='boton boton--primario boton_page_error'> Volver al Inicio</a>
            </div>
            
            

        </div> 

        
    </>
  )
}
