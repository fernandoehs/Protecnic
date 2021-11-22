import React,{useEffect,useState} from 'react';
import{db} from '../firebase';
//import BusquedaForm from './BusquedaForm';

import { ClientesLista } from './ClientesLista';

export const RegistradosLista = () => {



        const [links,setLinks]=useState([]);
         //db.collection('perros').where('registroperro','==',linkObject).onSnapshot((querySnapshot)=>{
        const getlinks=()=>{ 
           db.collection("clientes-bd").orderBy("timestamp","desc").onSnapshot((querySnapshot)=>{
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
           
            <div className="card-colunns" >
                {links.map(link=>{
                    
                   return <ClientesLista
                         key={link.id}
                        // <h1 >{link.nombre}</h1>
                        {...link}
                       
                        />
                       
                })}
                       
            </div>

         </div>

        
    )
}
