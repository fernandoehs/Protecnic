import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { RegistradosLista } from './RegistradosLista';
import firebase from 'firebase/app';
import {useHistory,useParams} from "react-router-dom";
import {db} from "../firebase";



const EditaEstado = (props) => {


    var db = firebase.firestore();

    

    const handleSubmit = e => {
        db.collection("clientes-bd").get(doc.id).update({estado: "porvisitar"});

        
        
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
