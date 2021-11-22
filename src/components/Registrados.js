import React,{useEffect,useState} from 'react';
import{db} from '../firebase';
//import BusquedaForm from './BusquedaForm';
import {PerroCard} from './PerroCard';

export const Registrados = () => {



        const [links,setLinks]=useState([]);
         //db.collection('perros').where('registroperro','==',linkObject).onSnapshot((querySnapshot)=>{
        const getlinks=()=>{ 
           db.collection("clientes-bd").where("fechacierre","==","").onSnapshot((querySnapshot)=>{
               const docs=[];
               querySnapshot.forEach((doc)=>{
                   
                   docs.push({...doc.data(), id:doc.id});
               });
               setLinks(docs);
           });
         
        };


        useEffect(() => {
            getlinks();
        }, [])
    return(
        <div>
            <h1>Lista de Registrados</h1>
            <div className="card-colunns" >
                {links.map(link=>{
                    
                   return <PerroCard 
                         key={link.id}
                        // <h1 >{link.nombre}</h1>
                        {...link}
                       
                        />
                       
                })}
                       
            </div>

         </div>

        
    )
}

   
