import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { RegistradosLista } from './RegistradosLista';
import firebase from 'firebase/app';
//import{toast} from "react-toastify";
import{NuevaForm} from './NuevaForm';
import { CardGroup, Card,Button, Alert,Badge } from 'react-bootstrap';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LinkForm = (props) => {

  const notify = () => toast.dark("Expediente Registrado!");
  
  
    const initialStateValues ={
      empresaseguro:'',
      expediente: '',
      aparato:'',
      direccion:'',
      localidad:'',
      fechaentrada:'',
      estado:'',
      fechacierre:'',
      estado: '',
      diasgestion:'',
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      
    };
    const [values,setValues]= useState(initialStateValues);
    
    const handleInputChange =(e) =>{
        const {name,value} =e.target;
        console.log(e.target.value);
        setValues({...values,[name]:value});
        
    }; 

   

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
    
          props.addOrEdit(values);
        
          setValues({...initialStateValues});
        }
        
        
    

    const restaFechas = function(f1,f2)
    {
        var aFecha1 = f1.split('-');
        var aFecha2 = f2.split('-');
        var aFechaToday = Date.now()
        var fFecha1 = Date.UTC(aFecha1[0],aFecha1[1]-1,aFecha1[2]);
        var fFecha2 = Date.UTC(aFecha2[0],aFecha2[1]-1,aFecha2[2]);

        if (f2==''){
            var dif = aFechaToday - fFecha1;
        }else{
            var dif = fFecha2-fFecha1;
        }
        
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        return dias;
        }
  

  


    return (


        
        
    <form className = "card card-body" style={{ width: '36rem' }} onSubmit= {handleSubmit}>

<div className = "form-group">
       
       <div className="row">
       <div className="col">
       <h5>Empresa de Seguros</h5>
          <select name="empresaseguro" onChange={handleInputChange} >
          <option selected>Seguro</option>
            <option value="mapfre">Mapfre</option>
            <option  value="catalana">Catalana</option>
            <option value="ocaso">Ocaso</option>
            <option value="generali">Generali</option>
          </select>
     </div>
         <div className="col">
         <h5 >Número de Expediente</h5>
          <input 
          type="textarea" 
          //className= "form-control" 
          placeholder="Nro de Expediente"
          name="expediente"
          onChange={handleInputChange}
          value={values.expediente}>
          </input>
         </div>
       </div>
       </div>
       
    

        <div className = "form-group">
        <div className="row">
        <div className="col">
          <h5>Aparato</h5>
            <input 
            type="textarea" 
          // className= "form-control" 
            placeholder="Aparato"
            name="aparato"
            onChange={handleInputChange}
            value={values.aparato}>
            </input>
        </div>

         
       <div className="col">
       <h5>Localidad</h5>
          <select name="localidad" onChange={handleInputChange} >
          <option selected>Localidad</option>
            <option value="Barcelona">Barcelona</option>
            <option  value="Sta. Coloma">Sta. Coloma</option>
            <option value="El Besos">El Besos</option>
            <option value="Badalona">Badalona</option>
          </select>

        </div>
        </div>
        </div>



        <div className = "form-group">
        <h5>Dirección</h5>
          <input 
          type="textarea" 
          //className= "form-control" 
          placeholder="Direccion"
          name="direccion"
          onChange={handleInputChange}
          value={values.direccion}>
          </input>
        </div>


        <div className = "form-group">
       
          <div className="row">
          <div className="col">
          <h5>Fecha de Entrada</h5>
                <input 
                type="date" 
                //className= "form-control" 
              
                name="fechaentrada"
                onChange={handleInputChange}
                value={values.fechaentrada}>
                </input>
        </div>
            <div className="col">
            <h5>Fecha de Cierre</h5>
            <input 
                  type="date" 
                  //className= "form-control" 
                 
                  name="fechacierre"
                  onChange={handleInputChange}
                  value={values.fechacierre}>
                  </input>
            </div>
          </div>
  
          </div>

          <div className = "form-group">
            <div className="row">
              <div className="col">
                  <h5>Días de Gestión</h5>
                  <input 
                  type="text" 
                  //className= "form-control" 
                  placeholder="Dias de gestion"
                  name="diasgestion"
                  onChange={handleInputChange}
                  value={values.diasgestion }>
                  </input>
              </div>

              <div class = "col">
                  <h5>Estado</h5>
                  {/* <input  */}
                  {/* // type="text" 
                  // //className= "form-control" 
                  // placeholder="Estado"
                  // name="estado"
                  // onChange={handleInputChange}
                  // value={values.estado }> */}
                  <select name="estado" onChange={handleInputChange} >
          <option selected>Estado</option>
            <option value="porllamar">Por Llamar</option>
            <option  value="porvisitar">Por Visitar</option>
            <option value="entaller">En Taller</option>
            <option value="pormaterial">Material Pedido</option>
          </select>
                  {/* </input> */}
              </div>
            </div>
         </div>

      

        <button className="btn btn-primary" type="submit" onClick={notify} >
          Guardar
        </button>
        
         
        <table className="table table-bordered">
  
         <tr>
        
        </tr>
        </table>
        
        <ToastContainer />
      </form>


 

      

    );
};

export default LinkForm;
