import React from 'react';
import EditaEstado from './EditaEstado';
import{db} from '../firebase';
import { CardGroup, Card,Button, Alert } from 'react-bootstrap';

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
        
        <Card>
            
                <Card.Body>
                        <div class="row">
                            <div class="col">
                                <p className="card-text">
                                    Expediente :{expediente}
                                    
                                </p>
                           </div>
                           <div class="col">
                                <p className="card-text">
                                    Empresa: {empresaseguro}
                                    
                                </p>
                           </div>
                           <div class="col">
                                <p className="card-text">
                                Aparato: {aparato}
                                
                                </p>
                           </div>
                         </div>  

                         <div class="row">
                            <div class="col">
                                <p className="card-text">
                                {/* Dirección: {localidad} */}
                                {
                           
                           (restaFechas(fechaentrada,fechacierre) >= 1)
                             &&<Alert variant="danger">Estado: Llamar</Alert>
                            //  <button type="button" class="btn btn-danger">Llamar</button>
                       }
                                </p>
                           </div>
                           <div class="col">
                                <p className="card-text">
                                Entrada: {fechaentrada}
                                {/* Cierre: {fechacierre} */}
                                </p>
                           </div>
                           <div class="col">
                                <p className="card-text">
                                Dias: {restaFechas(fechaentrada,fechacierre)}
                                </p>
                           </div>
                         </div>  

                        {
                           
                        //    (restaFechas(fechaentrada,fechacierre) >= 1)
                        //      &&<Alert variant="danger">Llamar</Alert>
                            //  <button type="button" class="btn btn-danger">Llamar</button>
                       }
                        {/* <p className="card-text">
                            estado: {estado}
                        </p> */}
                      
                        {
                           
                            (restaFechas(fechaentrada,fechacierre) ==0)
                              &&<Alert variant="dark">Estado: Llamar</Alert>
                        }
                        {
                           
                           (estado == "azul")
                             &&<button type="button" class="btn btn-danger">Info</button>
                       }
                           
       
                  </Card.Body>
                  
                  <form className = "card card-body justify-content-center" onSubmit= {handleSubmit} >

{/* <div className = "form-group">
  <h5>Estado</h5>
  <Button className="btn btn-primary btn-block" variant="primary">Visitar</Button>
</div> */}
                     <div class="justify-content-center">
                    <button className="btn btn-primary btn-block">
                    Visitar
                    </button>
                    </div>
                </form>

         
              
        
         </Card>

           
        
    )
}