import React from 'react';
import EditaEstado from './EditaEstado';
import{db} from '../firebase';
import './Lista.css';
export const Lista = (
    {
        empresaseguro,
        expediente,
        aparato,
        direccion,
        localidad,
        fechaentrada,
        fechacierre,
        diasgestion,
        estado,
        id,
        
   } ) => {

    

    var restaFechas = function(f1,f2)
    {
        var aFecha1 = f1.split('-');
        var aFecha2 = f2.split('-');
        var aFechaToday = Date.now()
        var fFecha1 = Date.UTC(aFecha1[0],aFecha1[1]-1,aFecha1[2]);
        var fFecha2 = Date.UTC(aFecha2[0],aFecha2[1]-1,aFecha2[2]);

        if (f2==''){
            var dif = aFechaToday - fFecha1 ;
        }else{
            var dif = fFecha2-fFecha1;
        }
        
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        return dias;
        }

        
        const handleSubmit = e => {

            const docRef = db.collection("clientes-bd").doc(id);
            //const addDocument = await docRef.set({ estado: "porvisitar" })
             docRef.update({ estado: "porvisitar" })
        
        
        }
    
        

    return(
<div>      
    <div>
    <table>
    <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
            <tr>
                <td>{expediente}</td>
                <td>{empresaseguro}</td>
                <td>{localidad}</td>
                <td>{aparato}</td>
                <td>{fechaentrada}</td>
                <td>{estado}</td>  
            </tr>
 
    </table>
    </div>

{/* <form className = "card card-body" onSubmit= {handleSubmit}>
<button className="btn btn-primary btn-block">
  Guardar
</button>
 
</form> */}
        
         
</div>  
        
    )
}