import React from 'react';
import AdminForm from './AdminForm';
import{db} from '../firebase';

export const Admin = () =>{

    const addOrEdit= async (linkObject)=>{
        console.log(linkObject);
        await db.collection('clientes-bd').doc().set(linkObject);
        console.log('Nuevo registro agregado');
      // toast.success("Nuevo Cliente Agregado");
    }

    return <div>
        <AdminForm addOrEdit={addOrEdit}/>
    </div>
    ;
};