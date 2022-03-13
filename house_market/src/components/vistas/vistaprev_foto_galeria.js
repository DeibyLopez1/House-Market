import React from 'react'

export const Vistaprev_foto_galeria = ({elemento}) => {
  return (
    <div className='VistaPrev_Galeria_Fotos'>
        <img src={elemento.img} alt={elemento.nombre} heigth="100%" width="100%"></img>
    </div>
  )
}
