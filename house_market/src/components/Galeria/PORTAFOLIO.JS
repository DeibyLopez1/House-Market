import React from 'react'
import { All_catalogo } from '../../page/all_catalogo'
import { Navbar } from './Navbar'
import { Galeria } from '../../page/Galeria'
export const PORTAFOLIO = () => {
    return (
        <div>
            <h4>SECCION DE : CASAS FAMILIARES Y APARTAMENTOS PERSONALES </h4>
            <hr />
            <Navbar />
            <Galeria />
            
        </div>
    )
}