import React,{useState, useEffect} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import './AddEdit.css';
import db from "../firebase"
import{toast} from "react-toastify";




export const AddEdit = () => {

    const[state, setState] = useState(initialState)
    const[data,setData] = useState({});

    const {name} = state;


    return <div>
        <div>
            <h2>
                Añadir Cliente
            </h2>
        </div>
        

    </div>
    ;
};
export default AddEdit;