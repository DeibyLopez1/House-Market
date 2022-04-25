import React from 'react'

export const galeria = ({titulo,prueba, urlimagen,text}) => {
  
    return (
      <div className='galeria text-center bg-dark'>
          <div className='overflow'>
              <img src= {prueba} alt="" className='card-img-top'/>
              </div>
          <div className='galeria-body text-light'>
          <h4 className='galeria-title'>{titulo}</h4>
         
          
                      </div>
          
                                      
     
  
      </div>
    )
  }
  
  export default galeria