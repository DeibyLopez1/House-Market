import React from 'react'
import { Header } from '../components/Header/header'
import { Banner_page } from '../components/vistas/Banner_page'
import foto_portada from '../data/img/4.jpg'
import dbImagenes from '../data/arrays/imagenes'
import { Vista_prev } from '../components/vistas/vista_prev'
import dbDescripcion from '../data/arrays/descripcionGeneral';
import dbCaracteristicas from '../data/arrays/caracteristicas_interiores';
import { Catalogo_inicio } from '../components/home/Catalogo_inicio'
import { Maps } from '../components/vistas/Maps'
import { Footer } from '../components/Footer/footer'

export const Single_producto = () => {
  return (
    <>
        <Header />

        <Banner_page Page={"CASA FAMILIAR"}/>

        <div className='Single-Producto-Contenido'>
            <div className='Single-Producto-Contenido-col-izquierda'>

                <div className='SingleP-col-izquierda-galeria'>
                    <div className='SingleP-col-izquierda-galeria__portada'>
                        <img src={foto_portada} ></img>
                    </div>
                    <div className='SingleP-col-izquierda-galeria__vistaprev'>
                        {
                            dbImagenes.map( (element, index) => {
                                return(
                                    <div>
                                        <img src={element.img}></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

            <aside className='Single-Producto-Contenido-col-derecha'>
                <div className='Single-Producto-Contenido-col-derecha__form'>
                    <h4 className='Single-Producto-Contenido-col-derecha__titulo'>RESERVE AHORA</h4>
                    <form>
                        <div className="Single-Producto-col-derecha__form-campo">
                            <label>NOMBRE COMPLETO</label>
                            <input type="text" name="name" placeholder="Nombre Completo" ></input>
                        </div>
                        <div className="Single-Producto-col-derecha__form-campo">
                            <label>NÚMERO DE TELEFONO</label>
                            <input type="tel" name="telefono" placeholder="Telefono" ></input>
                        </div>
                        <div className="Single-Producto-col-derecha__form-campo">
                            <label>CORREO ELECTRONICO</label>
                            <input type="email" name="email" placeholder="Correo Electronico" ></input>
                        </div>
                        <div className="Single-Producto-col-derecha__form-campo">
                            <label>MIEMBROS DE LA FAMILIA</label>
                            <input type="number" name="miembros" defaultValue={1} ></input>
                        </div>
                        <div className="Single-Producto-col-derecha__form-campo">
                            <label>NIÑOS</label>
                            <input type="number" name="niños" placeholder="0" ></input>
                        </div>
                        <div className="Single-Producto-col-derecha__form-campo">
                            <label>TU MENSAJE</label>
                            <textarea type="text" name="name" placeholder="DEJA TU MENSAJE PARA EL ARRENDADOR" ></textarea>
                        </div>
                        
                    </form>
                </div>
            </aside>

            <div className='SingleP-col-izquierda-informacion'>

                    <div className='SingleP-col-izquierda-informacion__descripcion'>
                        <div className='row-space SingleP-col-izquierda-informacion__descripcion--nombre'>
                            <h2>Apartamento Familiar</h2>
                            <p>Renta/Mes: $550</p>
                        </div>
                        
                        <p>3000 pies cuadrados, 3 dormitorios, semiamueblado, 
                        lujoso apartamento con orientación sur en alquiler en Rangs Malancha, Melbourne.</p>

                        <div className='div__linea--separador'></div>

                    </div>

                    <div className='SingleP-col-izq-informacion__detallesPrecio'>
                        
                        <h4>Detalles del precio</h4>

                        <p><b>Renta/Mes:</b> $550 (negociable)</p>
                        <p><b>Cargo por servicios: </b>sujeto a cambios</p>
                        <p><b>Depósito de seguridad: </b>3 meses de alquiler</p>
                        <p><b>Polpitica de liberación plana: </b>se requiere aviso de 3 meses antes.</p>

                        <div className='div__linea--separador'></div>
                    </div>

                    <div className='SingleP-col-izq-informacion__detallesPropiedad'>
                       

                        <p> <b>Dirección y área: </b>Rangs Malancha,House-68, Road-6A (Sad End Road), Tegucigalpa,FM </p>
                        <p> <b>Tamaño plano: </b>3000 pies cuadrados. </p>
                        <p> <b>Piso: </b>Un solo piso.</p>
                        <p> <b>Descripcion: </b>3 dormitorios grandes con 3 terrazas, dibujo amplio, comedor y sala de estar familiar, cocina muy decorada con trastero y cuarto de servicio con baño adjunto. </p>
                        <p> <b>Instalaciones: </b>1 Ascensor Moderno, Todas las Comodidades Modernas y Semi Amueblado. </p>
                        <p> <b>Instalaciones adicionales:</b> a. Electricidad con generador a plena carga, b. Géiser de gas central, c. Aparcamiento para 2 coches con alojamiento para 1 conductor, 
                        d. Salón de conferencias de la comunidad, e. Jardín embellecido en la azotea y césped, f. Instalación para colgar telas con cámara CC </p>

                        <div className='div__linea--separador'></div>
        
                    </div>
                    
                    <div> 
                       <h4>Descripción general de la propiedad</h4>

                       <div className='SingleP-col-izq-informacion__descripcionGeneral'>
                        
                        {
                            dbDescripcion.map( (element, index) => {
                                return (
                                    <div className='SingleP-col-izq-informacion__descripcionGeneral--card'>
                                        <p> <b>{element.nombre}</b> </p>
                                        <p> {element.contenido}</p>
                                    </div>
                                )
                            })
                        }

                            
                        </div>

                        <div className='div__linea--separador'></div>
                
                    </div>

                    <div>
                        <h4>Caracteristicas interiores</h4>

                        <div className='SingleP-col-izq-informacion__caracteristicasInteriores'>
                            {
                                dbCaracteristicas.map( (element) => {
                                    return(
                                        <p>-- {element.nombre}</p>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='SingleP-col-izq-informacion__ubicacion'>

                        <h4>Ubicación</h4>

                        <Maps />

                    </div>
                    
                     
                    
                </div>

                
                


        </div>
        <Catalogo_inicio />
        <div className="Banner-inicio-contacto">
            <div className="Banner-inicio-contacto__info">
                <div className="Banner-inicio-contacto__info--aviso">
                    <h2>Quiere Rentar su Casa</h2>
                    <h4>Llámenos y anuncie su propiedad aquí</h4>
                </div>
                <div className="Banner-inicio-contacto__info--contacto">
                    <h4>+504 9845-XXXX</h4>
                    <h4>empresa@gmail.com</h4>
                    <a href="entrada.html" className="boton boton--secundario informacion-Blog__boton">Contáctenos</a>
                </div>
            </div>
        </div>

        <Footer />
    </>
  )
}
