import React,{useEffect,useState} from 'react';
import{db} from '../firebase';
//import BusquedaForm from './BusquedaForm';

import { ClientesLista } from './ClientesLista';
import { ListaVisitar } from './ListaVisitar';
import { ListaMaterial } from './ListaMaterial';

export const EnTaller = () => {



        const [links,setLinks]=useState([]);
         //db.collection('perros').where('registroperro','==',linkObject).onSnapshot((querySnapshot)=>{
        const getlinks=()=>{ 
           db.collection("clientes-bd").where("estado","==","entaller").onSnapshot((querySnapshot)=>{
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
                    
                   return <ListaMaterial
                         key={link.id}
                        // <h1 >{link.nombre}</h1>
                        {...link}
                       
                        />
                       
                })}
                       
            </div>

         </div>

        
    )
}