import React,{useEffect,useState} from 'react';
import{db} from '../firebase';
//import BusquedaForm from './BusquedaForm';

import { ClientesLista } from './ClientesLista';
import { PerroCard } from './PerroCard';
import { Lista } from './Lista';

export const ClientesPorllamar = () => {



        const [links,setLinks]=useState([]);
         //db.collection('perros').where('registroperro','==',linkObject).onSnapshot((querySnapshot)=>{
        const getlinks=()=>{ 
           db.collection("clientes-bd").where("estado","==","porllamar").onSnapshot((querySnapshot)=>{
               const docs=[];
               querySnapshot.forEach((doc)=>{
                   
                   docs.push({...doc.data(), id:doc.id});
                   console.log(doc.id);
               });
               
               setLinks(docs);
               
           });
         
        };

     


        useEffect(() => {
            getlinks();
        }, [])
    return(
        <div>

        
                {links.map(link=>{
                    
                   return <Lista
                         key={link.id}
                        // <h1 >{link.nombre}</h1>
                        {...link}
                       
                        />
                       
                })}
                       
            </div>

        

        
    )
}