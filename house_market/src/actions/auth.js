import Swal from 'sweetalert2';
import { fetchSinToken, fetchConToken } from "../helpers/fetch_auth";
import { Redirect, BrowserRouter, Switch } from 'react-router-dom';
import { types } from '../types/types';
import { startLoading, finishLoading } from './ui';


export const startLogin =  (correo, contrasenia) => {
  return async (dispatch) => {
    console.log("Ded")
    const resp = await fetchSinToken("auth/", { correo, contrasenia }, "POST");
    console.log(resp)
    const body = await resp.json();
    
    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      console.log(body.ok);
      window.location = '/pag_user';
      localStorage.setItem("usuario",body.uid);
      localStorage.setItem("nombre",body.name);
      localStorage.setItem("user",body.usero);
      console.log(body);
      await dispatch(
        login({
            uid: body.uid,
            name: body.name,
            user: body.usero,
        })
        
     );
    } else {
      alert("Error en la autenticacion", body.msg);
      // Swal.fire("Error", body.msg, "error");
    }
  };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const registroUsuario = (nombre, correo, contrasenia) => {
    return async (dispatch) => {
        console.log(nombre, correo, contrasenia)
        const resp = await fetchSinToken(
            "auth/new",
            { nombre, correo, contrasenia},
            "POST"
        );
        console.log(resp)
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            console.log("body.ok")
        } else {
            // Swal.fire("Error", body.msg, "error");
            console.Console("error", body.msg);
        }
  };
};



export const logout = () => ({
    type: types.logout
})


