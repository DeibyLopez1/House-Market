import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { registroCategoria } from '../../actions/categoria';

export const Add_categoria = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );
    const { data } = useSelector( state => state.catg );
    const { names } = useSelector( state => state.catg );
    const [checking, setChecking] = useState(true);
    const [ActiveArea, setActiveArea] = useState();
    const [Activeseccion, setActiveSeccion] = useState();
    const [ActiveSubseccion, setActiveSubSeccion] = useState();
    const [secciones, setSeccionact] = useState([]);
    let seccionesAct =[]
    let subseccionesAct =[]
    

    console.log( ActiveArea, Activeseccion, ActiveSubseccion)

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

    const setSeccion = (e) =>{
        e.preventDefault();
        console.log(e.target.value)
        setActiveArea(e.target.value)
    }

    const setSubSeccion = (e) =>{
        e.preventDefault();
        console.log(e.target.value)
        setActiveSeccion(e.target.value)
    }

    const setSubSeccionActive = (e) =>{
        e.preventDefault();
        console.log(e.target.value)
        setActiveSubSeccion(e.target.value)
    }

    const ImprimirSecciones = () =>{

        data.map( ( nombreSecn, index ) => {
            if(ActiveArea === nombreSecn.area){
                seccionesAct.push(nombreSecn.seccion)
            }
        })
        
        let result = seccionesAct.filter( (item,index) =>{
            return seccionesAct.indexOf(item) === index;
        })

        console.log(result)

        return result.map( (nombre, index) => {
            return <option value={ nombre } onClick={setSubSeccion} >{nombre}</option>
        })
      
    }

    const ImprimirSubSecciones = () =>{
        
        data.map( ( nombreSecn, index ) => {
            if(ActiveArea === nombreSecn.area){
                seccionesAct.push(nombreSecn.seccion)
            }
        })
        
        let resultSecciones = seccionesAct.filter( (item,index) =>{
            return seccionesAct.indexOf(item) === index;
        })

        data.map( ( nombreSecn, index ) => {
            if((ActiveArea === nombreSecn.area) & (Activeseccion === nombreSecn.seccion)){
                subseccionesAct.push(nombreSecn.subseccion)
            }
        })
        
        let result = subseccionesAct.filter( (item,index) =>{
            return subseccionesAct.indexOf(item) === index;
        })

        console.log(result)

        return result.map( (nombre, index) => {
            return <option value={nombre} onClick={setSubSeccionActive}>{nombre}</option>
        })
      
    }

    

    if (checking) {
        return (
            <div className="cargando">
                <div class="preloader"></div>
                <h1>Cargando...</h1>
            </div>


        )
    }
    

  return (
     
    <div className='add_categoria_screen'>

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

                
        </div>

        <div className='add_categoria-cat'>
            <h4 className='centrar-texto'>Categorias</h4>
            <div className='div_opc_categorias'>

                    <select class="form-select__add-catg" size="3" aria-label="size 3 select example">
                        
                        {
                            names.map( ( nombreCATG, index ) => {
                                return <option value={nombreCATG} onClick={setSeccion}>{nombreCATG}</option>
                            })
                        }
                        
                        
                    </select>            
                


            </div>

            <h4 className='centrar-texto'>Sección</h4>
            <div className='div_opc_categorias'>

                    <select class="form-select__add-catg" size="3" aria-label="size 3 select example">
                     
                        <ImprimirSecciones />
                        
                    </select>            
                


            </div>

            <h4 className='centrar-texto'>Sub-sección</h4>
            <div className='div_opc_categorias'>

                    <select class="form-select__add-catg" size="3" aria-label="size 3 select example">
                       
                   <ImprimirSubSecciones />
                        
                    </select>            
                


            </div>

        </div>
    </div>
     
     
  )
}

   
