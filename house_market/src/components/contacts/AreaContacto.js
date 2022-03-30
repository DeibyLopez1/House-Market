import React, {Component} from 'react';

import mail from '../../data/img/Mail.jpg'



export const AreaContacto = () => {
     class App extends Component {
          constructor(props){
            super(props);
        
            this.state = {
              nombre: '',
              correo: '',
              telefono: '',
              mensajeCorreo: '',
              mensajeTelefono: '',
              invalidNombre: false,
              invalidCorreo: false,
              invalidTelefono: false,
            }
            this.onChange = this.onChange.bind(this);
            this.enviarAlaBD = this.enviarAlaBD.bind(this);
          }
        
          onChange = e =>{
            const {name, value} = e.target;
            this.setState({
              [name]: value,
            });
          }
          enviarAlaBD = e  => {
               e.preventDefault();
               let valido = true;
               if(this.state.nombre === ''){
                 this.setState({
                   invalidNombre: true,
                   mensajeNombre: 'El campo nombre es obligatorio, indica tu nombre',
                 });
                 valido = false;
               }
               if(this.state.correo === ''){
                 this.setState({
                   invalidCorreo: true,
                   mensajeCorreo: 'Indica tu dirección de correo',
                 });
                 valido = false;
               }
               if(this.state.telefono === ''){
                 this.setState({
                   invalidTelefono: true,
                   mensajeTelefono: 'Indica tu telefono',
                 });
                 valido = false;
               }
               if(valido){
                 //Enviarlo a la base de datos o a otro componente
                 console.log("Se envian los datos " + JSON.stringify(this.state));
               }
             }
        }

    return(

     <div>
          <div className="col-md-8">
               <div className="Empresa-contacto-Pregunta">
                    <form  action="#">
                         <h3>Tienes una Pregunta</h3>
                         <img src={mail} alt="envelope"></img>
                              <div className="imput-content">
                                   <h4>Envianos un Email</h4>
                                   <div className="imput-content">
                                        <form col="2" id=""action="#">
                                             <formGroup>
                                                  <label>
                                                       <input type="text" placeholder="Tu Nombre"  />
                                                  </label>
                                                
                                             </formGroup>
                                             
                                             <formGroup>
                                                  <label>
                                                       <input type="email" placeholder="Tu Email" />
                                                  </label>
                                                
                                             </formGroup>

                                             <formGroup>
                                                  <label>
                                                       <input type="text" placeholder="Tu número de teléfono"  />
                                                  </label>
                                                  
                                             </formGroup>
                                             
                                             
                                             <div>
                                                  <textarea rows="6" cols="80" placeholder="Escribe tu Mensaje Aquí"></textarea>
                                             </div>
                                        </form>
                                   </div> 
                              </div>
                         <div>
                              <div className="boton-enviar" onClick={() => this.handleClick()}>
                                   <input action="index.html" type="submit" value="Enviar" className="boton-enviar boton-secundario-enviar" />
                              </div>
                         </div>
                    </form> 
               </div>
          </div>
     </div>
)}