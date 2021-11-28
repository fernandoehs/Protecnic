import React from 'react';
import EditaEstado from './EditaEstado';
import{db} from '../firebase';

export const PerroCard = (
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
        <div className="card ms-3" style={{maxWidth: 540}}>
                <div className="row no-gutters">
                    
                    <div className="col-md-4">
                   
                    </div>    
                </div>
                 <div>
              
                </div>

                <div className="col-md-8">
                  <div className="card-body">

                     

                        <h5 className="card-title">
                            Número de Expediente :{expediente}
                        </h5>
                        <p className="card-text">
                            ID: {id}
                        </p>
                        <p className="card-text">
                            Empresa: {empresaseguro}
                        </p>
                        <p className="card-text">
                            Aparato: {aparato}
                        </p>
                        <p className="card-text">
                            Dirección: {localidad}
                        </p>
                        <p className="card-text">
                            Fecha de entrada: {fechaentrada}
                        </p>
                        <p className="card-text">
                            Fecha de cierre: {fechacierre}
                        </p>
                        <p className="card-text">
                            Dias: {restaFechas(fechaentrada,fechacierre)}
                        </p>
                        {
                           
                           (restaFechas(fechaentrada,fechacierre) >= 1)
                             &&<button type="button" class="btn btn-danger">Llamar</button>
                       }
                        <p className="card-text">
                            estado: {estado}
                        </p>
                      
                        {
                           
                            (restaFechas(fechaentrada,fechacierre) ==0)
                              &&<button type="button" class="btn btn-info">Llamar</button>
                        }
                        {
                           
                           (estado == "azul")
                             &&<button type="button" class="btn btn-danger">Info</button>
                       }
                       


                        
                  </div>
            </div>
                    
    <form className = "card card-body" onSubmit= {handleSubmit}>

<div className = "form-group">
  <h5>Estado</h5>

</div>


<button className="btn btn-primary btn-block">
  Guardar
</button>
 
</form>
        
         </div>
           
        
    )
}