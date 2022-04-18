import React from 'react'
import Icon_ubicacion from "../../data/img/iconos/icons8--24.png";
import Icon_cuartos from "../../data/img/iconos/icons8-cama-25.png";
import Icon_baños from "../../data/img/iconos/icons8-bañera-25.png";
import Icon_compartir from "../../data/img/iconos/icons8-compartir-25.png";
import Icon_favorito from "../../data/img/iconos/icons8-estrella-25.png";
import { useNavigate } from 'react-router-dom';

export const Vista_prev = ({elemento}) => {
    const navigate = useNavigate()
    
    const navegarSingle = () => {
        navigate('/infoProducto')
    }

  return (
        <div className="Catalogo_inicio__contenido--card" onClick={navegarSingle}> 
                
                <div className="Catalogo_inicio__contenido--card__img">
                    <img src={elemento.img} height="100%" width="100%" alt="FOTO CARD"></img>
                </div>

                <div className="Catalogo_inicio__contenido--card__ubicacion">
                    <h4>{elemento.nombre}</h4>
                    <div className="Catalogo_inicio__contenido--card__ubicacion--ubi ">
                        <div className='img_icono'>
                            <img src={Icon_ubicacion}></img>
                        </div>
                        <p>{elemento.ubicacion}</p>
                    </div>
                
                </div>

                <div className="Catalogo_inicio__contenido--card__precio-Caracteristicas">
                    <div className="row Catalogo_inicio__contenido--card__precio-Caracteristicas--carac">
                        <div className="caracteristicas-inicio-card__icono-nombre">
                            <div className='img_icono'>
                                <img src={Icon_cuartos}></img>
                            </div>
                            <p>3 Dormitorios</p>
                        </div>
                        <div className="caracteristicas-inicio-card__icono-nombre">
                            <div className='img_icono'>
                                <img src={Icon_baños}></img>
                            </div>
                            <p>2 Baños</p>
                        </div>
                    </div>

                    <div className="row Catalogo_inicio__contenido--card__precio--contenido">
                        <h4 className="Catalogo_inicio__contenido--card__precio--precio">{elemento.precio}</h4>
                        <div className='row Catalogo_inicio__contenido--card__precio--opciones'>
                            <a href="">
                                <div className='img_icono'>
                                    <img src={Icon_compartir}></img>
                                </div>
                            </a>
                            <a href="">
                                <div className='img_icono'>
                                    <img src={Icon_favorito}></img>
                                </div>
                            </a>
                        </div>
                    </div> 
                
                </div>


            </div>
    )
}
