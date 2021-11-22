import React from 'react';

export const ClientesLista = (
    {
        empresaseguro,
        expediente,
        aparato,
        direccion,
        localidad,
        fechaentrada,
        fechacierre,
        status,
        diasgestion,
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
  

    return(
       

  
    <tr>
      <td>{empresaseguro}</td>
      <td>{expediente}</td>
      <td>{aparato}</td>
      <td>{fechaentrada}</td>
    </tr>
   
 


        
         
           
        
    )
}