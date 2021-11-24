import React,{useEffect,useState} from 'react';
import{db} from '../firebase';
//import BusquedaForm from './BusquedaForm';

import { ClientesLista } from './ClientesLista';
import { PerroCard } from './PerroCard';

export const ClientesPorvisitar = () => {

    const cafelist = document.querySelector('#cafe-list');

    function renderCafe(doc){
        let li =document.createElement('li');
        let expediente = document.createElement('span');
        let estado = document.createElement('span');

        //li.setAttribute('data-id',doc.id);
        expediente.textContent =doc.data().expediente;
        estado.textContent = doc.data().estado;

        li.appendChild(expediente);
        li.appendChild(estado);
        
        cafelist.appendChild(li);
    }

    db.collection('clientes-bd').get().then((snapshot)=>{
        snapshot.docs.forEach(doc => {
            renderCafe(doc);
            console.log(doc.id);
        })
    })

        // const [links,setLinks]=useState([]);
        //  //db.collection('perros').where('registroperro','==',linkObject).onSnapshot((querySnapshot)=>{
        // const getlinks=()=>{ 
        //    db.collection("clientes-bd").where("estado","==","porvisitar").onSnapshot((querySnapshot)=>{
        //        const docs=[];
        //        querySnapshot.forEach((doc)=>{
                   
        //            docs.push({...doc.data(), id:doc.id});
        //        });
        //        setLinks(docs);
        //    });
         
        // };


        // useEffect(() => {
        //     getlinks();
        // }, [])
    return(
        <div>
           
            <div className="card-colunns" >
                {/* {links.map(link=>{
                    
                   return <PerroCard
                         key={link.id}
                        // <h1 >{link.nombre}</h1>
                        {...link}
                       
                        />
                       
                })}
                        */}
                        <ul id="cafe-list"></ul>
            </div>

         </div>

        
    )
}