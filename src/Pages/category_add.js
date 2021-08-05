import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import { Button, Fab, TextField } from '@material-ui/core';
import { addBrand,updateBrand } from "../Services/Servis"
import ReactDOM from "react-dom";
import {
useHistory,
  useParams
} from "react-router-dom";

import "./Display.css";
import AddRem from "../Component/AddRemove/AddRem"


function Category_add() {
    let history=useHistory();

    const [editeedname, setEname] = React.useState("")
    // const [brandname, setbrandname] = React.useState("")


 
    // const updaet = async () => {
     
    //     let resp= await addBrand(editeedname)
    //     if(resp.isExecuted){
    //         history.push('/brand')

    //     }
    //     else {
    //         console.log("something went wrong");
    //     }

    // }
    const cancle = ()=>{
        setEname("");
        history.push('/brand')
    }
    return (
        <div  style={{
            width: "100%",
            disply: "flex",
            overflowX: 'hidden'
          }}>
        <AddRem></AddRem>
      </div>
    )
}

export default Category_add
