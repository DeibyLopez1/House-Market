import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from '../page/home';
import { All_catalogo } from '../page/all_catalogo';
import { Contacts } from '../page/contacts';
import { Error_404 } from '../page/Error_404';
import { Single_producto } from '../page/Single_producto';

export const Rutas = () => {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Allcatalogo" element={<All_catalogo />} />
      <Route path="contacto" element={<Contacts />} />
      <Route path="error404" element={<Error_404 />} />
      <Route path="infoProducto" element={<Single_producto />} />
      <Route path="*" element={<Error_404 />} />
    </Routes>
  )
}
