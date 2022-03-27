import React from 'react'

export const Opc_categoria = ({opcion = "D"}) => {
  console.log("faker")
  return (
    <div className='opc_categoria_view'>
        <p> { opcion }</p>
    </div>
  )
}
