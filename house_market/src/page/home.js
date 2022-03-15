import React from 'react'
import { Footer } from '../components/Footer/footer'
import { Header } from '../components/Header/header'
import { Catalogo_inicio } from '../components/home/Catalogo_inicio'
import { FormBuscar } from '../components/home/FormBuscar'
import { Galeria_Inicio } from '../components/home/Galeria_Inicio'
import { Nosotros } from '../components/home/Nosotros'
import { Direccion_empresa } from '../components/nosotros/Direccion_empresa'

export const Home = () => {
  return (
   <>
        <Header />

        <div className="Banner_inicio">
            <div className="Banner_inicio__informacion no-padding">
                <h4>Ofrecerte un buen servicio es nuestra pasión</h4>
                <h1>Busca tu nuevo hogar AQUI</h1>

                <a href="entrada.html" className="boton boton--secundario informacion-Blog__boton">Ver Catálogo</a>
            </div>
        </div>

        <FormBuscar />
        <Nosotros />
        <Catalogo_inicio />

        <div className="Banner-inicio-contacto">
            <div className="Banner-inicio-contacto__info">
                <div className="Banner-inicio-contacto__info--aviso">
                    <h2>Quiere Rentar su Casa</h2>
                    <h4>Llámenos y anuncie su propiedad aquí</h4>
                </div>
                <div className="Banner-inicio-contacto__info--contacto">
                    <h4>+504 9845-XXXX</h4>
                    <h4>empresa@gmail.com</h4>
                    <a href="entrada.html" className="boton boton--secundario informacion-Blog__boton">Contáctenos</a>
                </div>
            </div>
        </div>

        <Galeria_Inicio />

       <Direccion_empresa /> 

        <Footer />
   </>
  )
}
