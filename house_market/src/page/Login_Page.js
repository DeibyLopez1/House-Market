import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';

import logo from '../data/img/HOUSE_MARKET.png'
import { startLogin } from '../actions/auth';

export const Login_Page = () => {
  
    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;


    const handleLogin = (e) => {
        e.preventDefault();
        console.log("er")
        dispatch(startLogin(email,password))
         console.log("Faker")
    }
    
  
    return (
    <div className='Login-Page'>
            <div className='Login-fondo'>
                <img src={logo}></img>
            </div>
            <div className='contenedor-login-form'>
                
                <h3>INICIO DE SESIÓN</h3>
                <form onSubmit={ handleLogin }>
                            
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

                            <button
                                type="submit"
                                className="btn btn-primary btn-login"
                                
                            >
                                Login
                            </button>
                                    
                            <p class='passOlvidada'>
                                <Link 
                                    to="/registro"
                                >
                                    Crear nueva cuenta   
                                </Link></p>
                            <p class='passOlvidada'><a href='' color='red'>Se me olvido la contraseña</a></p>

                            <p class='passOlvidada2'>Si continuas aceptas nuestros términos 
                            de servicios y confirmas que has leído nuestras políticas de privacidad.</p>
                </form>
        </div>
    </div>
    
  )
}
