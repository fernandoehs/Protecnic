import React from 'react';
import {useEffect,useState} from 'react';
import{Link,useLocation} from'react-router-dom';
import "./AdminForm.css";
import firebase from 'firebase/app';
import { useForm } from "react-hook-form";
import Headers from "./Header";

export const AdminForm = (props) => {

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
  

  




    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const { register } = useForm();
  const [result, setResult] = useState("");
  //const onSubmit = (data) => setResult(props.addOrEdit(););
   
  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);

      props.addOrEdit(values);
    
      setValues({...initialStateValues});
    }
    


 

  return (
    <form onSubmit= {handleSubmit}>
      <Headers />
      <input {...register("empresaseguro")}
      
      placeholder="Empresa Seguro" />
      <input {...register("expediente")} placeholder="Expediente" />
      <select {...register("localidad")}>
        <option value="">Select...</option>
        <option value="A">Barcelona</option>
        <option value="B">Categorye</option>
      </select>
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}


export default AdminForm



