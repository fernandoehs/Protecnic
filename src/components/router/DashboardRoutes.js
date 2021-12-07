import React from 'react';
import { Nav } from '../Nav';
import { Switch, Redirect } from 'react-router-dom';
import { Busqueda } from '../Busqueda';
import { Links } from '../Links';
import {Registrados} from '../Registrados';
import {ClientesMapfre} from '../ClientesMapfre';
import {ClientesCatalana} from '../ClientesCatalana';
import {ClientesOcaso} from '../ClientesOcaso';
import {ClientesGenerali} from '../ClientesGenerali';
import {ClientesPorllamar} from '../ClientesPorllamar';
import {ClientesPorvisitar} from '../ClientesPorvisitar';
import {Admin} from '../Admin';


import {
    
    Route,
    
  } from "react-router-dom";


export const DashboardRoutes = () => {
    return (
        <>
          <Nav />
          {/* <div className="container mt-2" > */}
             <Switch>
                <Route exact path="/registro/" component={Links}/>
               
                <Route exact path="/busqueda/" component={Busqueda}/>
                <Route exact path="/registrados" component={Registrados}/>
                <Route exact path="/mapfre" component={ClientesMapfre}/>
                <Route exact path="/catalana" component={ClientesCatalana}/>
                <Route exact path="/ocaso" component={ClientesOcaso}/>
                <Route exact path="/generali" component={ClientesGenerali}/>
                <Route exact path="/porllamar" component={ClientesPorllamar}/>
                <Route exact path="/porvisitar" component={ClientesPorvisitar}/>
                <Route exact path="/admin" component={Admin}/>
                <Redirect to="/registro/"/>
             </Switch>    
          {/* </div>   */}
        </>
    )
}
