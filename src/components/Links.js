import React from 'react';
import LinkForm from './LinkForm';

import{db} from '../firebase';

export const Links = () =>{

    const addOrEdit= async (linkObject)=>{
        console.log(linkObject);
        await db.collection('clientes-bd').doc().set(linkObject);
        console.log('Nuevo registro agregado');
    }

    return <div>
        <LinkForm addOrEdit={addOrEdit}/>
    </div>
    ;
};

//export default Links;
