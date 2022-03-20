import React, {useState} from 'react'
import LOGO from '../../data/img/HOUSE_MARKET_logo.png'
import { Outlet, Link } from "react-router-dom";
import  Modal  from '../Modal/Modal'

export const Header = () => {


    /** constantes de estado para login */
    const [estadoModal1,cambiarestadoModal1] = useState(false);
    const [estadoModal2,cambiarestadoModal2] = useState(false);
    const [body, setBody] = useState({username:'',password:''})
    const [body2, setBody2] = useState({nombre:'',username:'',password:''})
    

    /* constatnte para capturar el usuario y contrase;a para el login*/ 
    const inputCambio=({target})=>{
        const {name,value} = target;
        setBody({
            ...body,
            [name]:value
        })
    }
     /* constatnte para capturar el usuario y contrase;a para crear cuenta*/ 
    const inputCambio2=({target})=>{
        const {name,value} = target;
        setBody2({
            ...body2,
            [name]:value
        })
    }

    /* imprimir en consola valores de login*/ 
    const onSubmite = ()=>{
        console.log(body)
    }

        /* imprimir en consola valores  de registro de usuarios*/ 
    const onSubmite2 = ()=>{
        console.log(body2)
    }


  return (
    <>  

            <Modal
            estado={estadoModal1}
            cambiarEstado={cambiarestadoModal1}
            titulo={"INICIO DE SESIÓN"}
        >
                <form>
                    <h4 class='titulosIngreso'>Usuario</h4>
                    <input name='username' placeholder='Ingrese su Usuario' value={body.username} onChange={inputCambio} class='inputIngreso'></input><br></br>
                    <hr class='inputIngresoLinea'></hr>
                    <h4 class='titulosIngreso'>Contraseña</h4>
                    <input name='password' type={'password'} value={body.password} onChange={inputCambio} placeholder='Ingrese su Contraseña' class='inputIngreso'></input><br></br>
                    <hr class='inputIngresoLinea'></hr>
                    <p class='passOlvidada'><a href=''>¿Has olvidado tu Contraseña?</a></p>
                    <button type='button' onClick={onSubmite} class='botonEntrarLogin'>Entrar</button>
                    <br></br>
                    <p class='passOlvidada'><a href='' color='blue'>Aun no tengo una Cuenta</a></p>

                    <p class='passOlvidada2'>Si continuas aceptas nuestros términos 
                    de servicios y confirmas que has leído nuestras políticas de privacidad.</p>
                </form>
        </Modal>
        <Modal
            estado={estadoModal2}
            cambiarEstado={cambiarestadoModal2}
            titulo={"REGISTRARSE"}
        >
                <form>
                    <h4 class='titulosIngreso'>Nombre</h4>
                    <input name='nombre' value={body2.nombre} onChange={inputCambio2} placeholder='Ingrese su Nombre' class='inputIngreso'></input><br></br>
                    <hr class='inputIngresoLinea'></hr>
                    <h4 class='titulosIngreso'>Usuario</h4>
                    <input name='username' value={body2.username} onChange={inputCambio2} placeholder='Ingrese su Usuario' class='inputIngreso'></input><br></br>
                    <hr class='inputIngresoLinea'></hr>
                    <h4 class='titulosIngreso'>Contraseña</h4>
                    <input name='password' value={body2.password}  type={'password'} onChange={inputCambio2} placeholder='Ingrese su Contraseña' class='inputIngreso'></input><br></br>
                    <hr class='inputIngresoLinea'></hr>
                    <button type='button' class='botonEntrarLogin' onClick={onSubmite2}>Registrarse</button>
                    <br></br>
                    <p class='passOlvidada'><a href='' color='blue'>Ya tengo una Cuenta</a></p>

                    <p class='passOlvidada2'>Si continuas aceptas nuestros términos 
                    de servicios y confirmas que has leído nuestras políticas de privacidad.</p>
                </form>
        </Modal>


          <header className="header no-padding">
              <div className="contenedor header-contenedor">

                  <div className="header-informacion">

                      <div className="header-informacion__logo">
                          <a href="">
                              <img src={LOGO} alt="LOGO" height="100%" width="100%"></img>
                          </a>
                      </div>

                      <div className="header-informacion__opciones">

                          <div className="header-informacion__opciones--contacto">

                              <div className="header-informacion__opciones--contacto__redesSociales">
                                  <a href="">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                      </svg>
                                  </a>

                                  <a href="">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                          <rect x="4" y="4" width="16" height="16" rx="4" />
                                          <circle cx="12" cy="12" r="3" />
                                          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                      </svg>
                                  </a>
                              </div>

                          </div>

                          <div className="header-informacion__opciones--login">
                             <button class='botonesInvisibles' onClick={()=> cambiarestadoModal1(!estadoModal1)}>INICIAR SESION</button>
                                <button class='botonesInvisibles' onClick={()=> cambiarestadoModal2(!estadoModal2)}>REGISTRO</button>
                          </div>
                          <div className="header-informacion__opciones--buscarIcon">
                              <a href="">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                      <circle cx="10" cy="10" r="7" />
                                      <line x1="21" y1="21" x2="15" y2="15" />
                                  </svg>
                              </a>
                          </div>
                      </div>

                  </div>

                  <div className="header-filtros">

                       <Link to="/">INICIO</Link>
                        <Link to="/Allcatalogo">CASAS</Link>
                        <Link to="/Allcatalogo">APARTAMENTOS</Link>
                        <Link to="/">SOBRE NOSOTROS</Link>
                        <Link to="/contacto">CONTACTO</Link>
                        <Link to="/galeria">GALERIA</Link>
                        <Link to="/">BLOG</Link>


                  </div>

              </div>
          </header> 
    </>
  )
}
