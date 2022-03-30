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
    const { names } = useSelector( state => state.catg );
    const [checking, setChecking] = useState(true);
    const [ActiveArea, setActiveArea] = useState(0);
    

  //  console.log(data)

    useEffect(() => {
        
        setTimeout(() => {
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

    const verificarArea = (actual) => {

        if( ActiveArea === actual){  
            return "option_categoria_LI opc_active"
        }else{
            return "option_categoria_LI"
        }

    };

    const imprimir = (e) =>{
        e.preventDefault();
        const index = e.target
        const strin1 = index.split(' ')
        console.log(strin1)
    }

    if (checking) {
        return (
            <div className="cargando">
                <div class="preloader"></div>
                <h1>Abriendo la tienda</h1>
            </div>


        )
    }
    

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

           
            <select class="form-select" size="3" aria-label="size 3 select example">
                
                {
                    names.map( ( nombreCATG, index ) => {
                        return <option value={index}>{nombreCATG}</option>
                    })
                }
                
                
            </select>            
           


        </div>
        
        

    </div>
  )
}

   
