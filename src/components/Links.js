import React from 'react';
import LinkForm from './LinkForm';
import{toast} from "react-toastify";

import{db} from '../firebase';
//import { Toast } from 'react-toastify/dist/components';
//import { ToolbarSeparator } from 'material-ui';

export const Links = () =>{

    const addOrEdit= async (linkObject)=>{
        console.log(linkObject);
        await db.collection('clientes-bd').doc().set(linkObject);
        console.log('Nuevo registro agregado');
      // toast.success("Nuevo Cliente Agregado");
    }

    return <div>
        <LinkForm addOrEdit={addOrEdit}/>
    </div>
    ;
};

//export default Links;
