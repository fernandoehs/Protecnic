import React from 'react';
import {useEffect,useState} from 'react';
import{Link,useLocation} from'react-router-dom';
import "./AdminForm.css"

export const AdminForm = () => {

    const[activeTab,setActiveTab] = useState("Home");
    const location =useLocation();

    useEffect(()=>{
        if(location.pathname==="/"){
            setActiveTab("Home")
        }else if(location.pathname ==="/add"){
            setActiveTab("Añadir Contacto")
        }
    },[location]);

    return(
        <div>
            <div className="header">
                <p className="logo"> Contact App</p>
                <div className="header-right">
                    <Link to="/">
                        <p className={`${activeTab ==="Home" ? "active":""}`}
                        onClick={()=>setActiveTab("Home")}
                        >
                            Home
                        </p>
                    
                    </Link>
                    <Link to="/add">
                        <p className={`${activeTab ==="Home" ? "active":""}`}
                        onClick={()=>setActiveTab("Home")}
                        >
                            Añadir Cliente
                        </p>
                    
                    </Link>
                    <Link to="/add">
                        <p className={`${activeTab ==="Home" ? "active":""}`}
                        onClick={()=>setActiveTab("Home")}
                        >
                            Añadir Cliente
                        </p>
                    
                    </Link>
                </div>
            </div>
        

       </div>
       
    ) 
}

export default AdminForm