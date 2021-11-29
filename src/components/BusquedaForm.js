import React, {useState} from 'react';
import{db} from '../firebase';

///import {getlinks} from './Busqueda';

const BusquedaForm = () => {
    let valorBuscar='';    

    const [links,setLinks]=useState([]);

    const initialStateValues ={
      
        expediente:'',
       
    };
    const [values,setValues]= useState(initialStateValues);

    let valor = '';
    
    const handleInputChange =(e) =>{
        const {value} =e.target;
        valor = e.target.value;
       setValues({value});
        console.log(valor)
        valorBuscar=valor;
        };


    const handleSubmit = e => {
        e.preventDefault();
        buscar();
        setValues({...initialStateValues});
        
    }

    const buscar = () =>{
        db.collection('clientes-bd')
        .where("expediente", "==",valorBuscar).onSnapshot((querySnapshot)=>{
            const docs=[];
            
            querySnapshot.forEach((doc)=>{
                
                docs.push({...doc.data(), id:doc.id});
            });
            setLinks(docs);
            console.log(docs)
            //console.log(linkObject);
        });
    }
    return (
    <div>

        
    <form className = "card card-body" onSubmit= {handleSubmit}>
        
        <div className = "form-group input-group">
          <input 
          type="text" 
          className= "form-control" 
          placeholder="Número de Expediente"
          name="expediente"
          onChange={handleInputChange}
          values={values.expediente}
          >
          </input>

          <button className="btn btn-primary btn-block">
          Buscar
        </button>

        </div>
    </form>
    <div className="col-md-8" >
    {links.map(link=>{
       return <div key={link.id}>
             <h1 >{link.expediente}</h1>
             </div>
    })}
           
    </div>
    </div>
    )
}
export default BusquedaForm;
