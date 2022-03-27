import { fetchSinToken, fetchConToken } from "../helpers/fetch_auth";

import { types } from '../types/types';

export const obtenerCategorias = () => {
    return async (dispatch) => {
        
        const resp = await fetchSinToken(
            "categoria/",
            {}
        );

        console.log(resp)

        const body = await resp.json();
        
        if (body.ok) {
            console.log( body.categorias )
            dispatch( categorias( body.categorias ) )
        } else {
            // Swal.fire("Error", body.msg, "error");
            console.Console("error", body.msg);
        }
  };
};

export const categorias = ( data ) => {
    console.log(data)
    return ({type: types.showCategorias,
    payload: data})
};

export const registroCategoria = (area, seccion, subseccion) => {
    return async (dispatch) => {
        
        const resp = await fetchSinToken(
            "categoria/new/catg",
            {area, seccion, subseccion},
            "POST"
        );

        console.log(resp)
        const body = await resp.json();
        
        console.log(body)
        if (body.ok) {
            alert("Guardado con exito")
        } else {
            // Swal.fire("Error", body.msg, "error");
            console.Console("error", body.msg);
        }
  };
};

