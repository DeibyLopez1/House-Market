import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import validator from 'validator';

import { useForm } from '../hooks/useForm';
import { setError, removeError } from '../actions/ui';

import logo from '../data/img/HOUSE_MARKET.png'
import { registroUsuario } from '../actions/auth';

export const Registro_Page = () => {
   
    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name ,email ,password ,password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

         if ( isFormValid() ) {
            dispatch(registroUsuario(name, email, password))
            console.log("Holis")
        }
    }

    const isFormValid = () => {
        
        if ( name.trim().length === 0 ) {
            dispatch( setError('Name is required') )
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') )
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('Password should be at least 6 characters and match each other') )
            return false
        }
        
        dispatch( removeError() );
       return true;
    }
  
    return (
    <div className='Login-Page'>
            <div className='Login-fondo'>
                <img src={logo}></img>
            </div>
            <div className='contenedor-registro-form'>
                
                <h3>REGISTRO</h3>
                <form onSubmit={ handleRegister }>
                            
                            {
                                msgError &&
                                (
                                    <div className="auth__alert-error">
                                        { msgError }
                                    </div>
                                )
                            }
                            
                            <div className="Single-Producto-col-derecha__form-campo">
                                <label>NOMBRE COMPLETO</label>
                                
                                <input 
                                type="text" 
                                name="name" 
                                placeholder="Nombre" 
                                autoComplete='off'
                                value={ name }
                                onChange={ handleInputChange }
                                ></input>

                            </div>

                            <div className="Single-Producto-col-derecha__form-campo">
                                <label>CORREO ELECTRONICO</label>
                                
                                <input 
                                type="email" 
                                name="email" 
                                placeholder="Correo Electronico" 
                                autoComplete='off'
                                value={ email }
                                onChange={ handleInputChange }
                                ></input>

                            </div>
                            
                            <div className="Single-Producto-col-derecha__form-campo">
                                <label>CONTRASEÑA</label>
                                
                                <input 
                                type="password" 
                                name="password" 
                                placeholder="Contraseña" 
                                value={ password }
                                onChange={ handleInputChange }
                                ></input>
                            </div>

                            <div className="Single-Producto-col-derecha__form-campo">
                                <label>CONFIRMAR CONTRASEÑA</label>
                                
                                <input 
                                type="password" 
                                name="password2" 
                                placeholder="Correo Electronico" 
                                autoComplete='off'
                                value={ password2 }
                                onChange={ handleInputChange }
                                ></input>

                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-login"
                            >
                                Registro
                            </button>
                           

                           <p class='passOlvidada'>
                                <Link 
                                    to="/auth/login"
                                    className="link"
                                >
                                    ¿ya tienes cuenta?
                                </Link>
                            </p>
                </form>
        </div>
    </div>
    ) 
}
