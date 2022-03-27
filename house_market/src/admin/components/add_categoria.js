import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { registroCategoria } from '../../actions/categoria';
import { Opc_categoria } from '../../components/vistas/opc_categoria';

export const Add_categoria = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );
    const { data } = useSelector( state => state.catg );
    const [checking, setChecking] = useState(true);
    const areas = [];
    const nombre_areas = [];
    let count = 0;

  //  console.log(data)

    useEffect(() => {
        
        data.map( (categoria) => {
           
            areas.push(categoria.area)
           
        })

        setTimeout(() => {
            
            areas.map((nombre) => {
                
                if(areas[count] !== areas[count+1]){
                    nombre_areas.push(areas[count])
                   
                }
                count++
            })
            setChecking(false)       
        }, 3000);
        
    }, [])
    

    const [ formValues, handleInputChange ] = useForm({
        area: '',
        seccion: '',
        subseccion: '',
    });

    const { area, seccion, subseccion } = formValues;  

    console.log(area,seccion,subseccion)


    const handleRegisterCatg = (e) => {
        e.preventDefault();
        
        dispatch(registroCategoria(area, seccion, subseccion))
        
    }

    setTimeout(() => {
        console.log(nombre_areas)
        console.log(areas)
        
    }, 500);

    

    if (checking && !loading) {
        return (
            <div className="cargando">
                <div class="preloader"></div>
                <h1>Abriendo la tienda</h1>
            </div>


        )
    }

   
    console.log(nombre_areas)
    console.log(areas)
    console.log(data)

  return (
     <div>
       <h3>AGREGAR UNA CATEGORIA</h3>
       <br></br>
       
        <form onSubmit={handleRegisterCatg}>
            
            <div className="Single-Producto-col-derecha__form-campo">

                <label for="floatingInputValue">Area</label>
                <input 
                    class="form-control form-control-lg" 
                    type="text" 
                    placeholder="Nombre Area" 
                    aria-label=".form-control-lg example"
                    name='area'
                    value={ area }
                    onChange={ handleInputChange }
                ></input>
            </div>
        
            <br></br>

            <div className="Single-Producto-col-derecha__form-campo">
                <label for="floatingInputValue">Sección</label>
                <input 
                    class="form-control form-control-lg" 
                    type="text" 
                    placeholder="Nombre Sección" 
                    aria-label=".form-control-lg example"
                    name='seccion'
                    value={seccion}
                    onChange={ handleInputChange }
                ></input>
                
            </div>

           
            <br></br>

            <div className="Single-Producto-col-derecha__form-campo">

                <label for="floatingInputValue">Sub Seccion</label>
            <input 
                class="form-control form-control-lg" 
                type="text" placeholder="Nombre SubSeccion" 
                aria-label=".form-control-lg example"
                name='subseccion'
                value={subseccion}
                onChange={ handleInputChange }
            ></input>
            </div>

            
            <br></br>

            <button type="submit" class="btn btn-primary btn-add_categoria">Subir</button>
  
        </form>

        <div className='div_opc_categorias'>

           
            <ul className='contenedor_opc_categoria'>

                {
                    data.map( (nombre) =>{
                        return <li className='option_categoria_LI'> <Opc_categoria opcion={ nombre.area } /> </li>
                    })
                   
                    
                }
   
                   
            </ul>            
            <ul className='contenedor_opc_categoria'>
                   
               
            </ul>            
            <ul className='contenedor_opc_categoria'>
                 
                   
            </ul>            

           
           


        </div>
        
        

    </div>
  )
}

   
