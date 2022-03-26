import React from 'react'
import {  Routes, Switch, Route , Navigate } from "react-router-dom";
import { Home } from '../page/home';
import { All_catalogo } from '../page/all_catalogo';
import { Contacts } from '../page/contacts';
import { Error_404 } from '../page/Error_404';
import { Single_producto } from '../page/Single_producto';
import { Login_Page } from '../page/Login_Page';
import { Registro_Page } from '../page/Registro_Page';
import { Pag_user } from '../page/pag_user';


const token = localStorage.getItem('token');

export const Rutas = () => {
  return (
     <Routes>
       
      <Route path="/" element={<Home />} />
      <Route path="allcatalogo" element={<All_catalogo />} />
      <Route path="contacto" element={<Contacts />} />
      <Route path="error404" element={<Error_404 />} />
      <Route path="infoProducto" element={<Single_producto />} />
      <Route path="login" element={<Login_Page />} />
      <Route path="registro" element={<Registro_Page />} />
      <Route path="*" element={<Error_404 />} />
      <Route path="pag_user" element={<Pag_user />} />
      }} />
    </Routes>
    
        
      
      

  )
}
