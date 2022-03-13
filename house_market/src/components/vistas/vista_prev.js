import React from 'react'

export const Vista_prev = ({elemento}) => {
  return (
        <div className="Catalogo_inicio__contenido--card"> 
                
                <div className="Catalogo_inicio__contenido--card__img">
                    <img src={elemento.img} height="100%" width="100%" alt="FOTO CARD"></img>
                </div>

                <div className="Catalogo_inicio__contenido--card__ubicacion">
                    <h4>{elemento.nombre}</h4>
                    <div className="row centrar-texto Catalogo_inicio__contenido--card__ubicacion--ubi ">
                        <p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pins" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
                            <line x1="8" y1="7" x2="8" y2="7.01" />
                            <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
                            <line x1="16" y1="15" x2="16" y2="15.01" />
                            </svg>
                        </p>
                        <p>{elemento.ubicacion}</p>
                    </div>
                
                </div>

                <div className="Catalogo_inicio__contenido--card__precio-Caracteristicas">
                <div className="row Catalogo_inicio__contenido--card__precio-Caracteristicas--carac">
                    <div className="row caracteristicas-inicio-card__icono-nombre">
                        <p><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bed" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />
                            <circle cx="7" cy="10" r="1" />
                            </svg>
                        </p>
                        <p>3 Dormitorios</p>
                    </div>
                    <div className="row caracteristicas-inicio-card__icono-nombre">
                        <p><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bath" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
                            <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
                            <path d="M4 21l1 -1.5" />
                            <path d="M20 21l-1 -1.5" />
                            </svg></p>
                            <p> 2 Baños</p>
                    </div>
                </div>

                <div className="row-space ">
                    <h4 className="Catalogo_inicio__contenido--card__precio--precio">{elemento.precio}</h4>
                    <div>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="6" cy="12" r="3" />
                                    <circle cx="18" cy="6" r="3" />
                                    <circle cx="18" cy="18" r="3" />
                                    <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
                                    <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
                                    </svg>
                        </a>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg></a>
                    </div>
                </div> 
                
                </div>


            </div>
    )
}
