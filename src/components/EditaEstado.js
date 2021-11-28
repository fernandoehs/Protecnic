import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { RegistradosLista } from './RegistradosLista';
import firebase from 'firebase/app';
import {useHistory,useParams} from "react-router-dom";
import {db} from "../firebase";
import {props} from "./PerroCard"



const EditaEstado = (    {
  empresaseguro,
  expediente,
  aparato,
  direccion,
  localidad,
  fechaentrada,
  fechacierre,
  diasgestion,
  estado,
  id,
  
} ) => {


    

    const handleSubmit = e => {

      
        
        
    }




    return (

        
    <form className = "card card-body" onSubmit= {handleSubmit}>

        <div className = "form-group">
          <h5>Estado</h5>
       
        </div>
       

        <button className="btn btn-primary btn-block">
          Guardar
        </button>
         
      </form>


 

      

    );
};

export default EditaEstado;
