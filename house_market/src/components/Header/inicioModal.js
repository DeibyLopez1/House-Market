


/*


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

/*
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

*/