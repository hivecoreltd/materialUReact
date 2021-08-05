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


function Brand_add() {
    let history=useHistory();

    const [editeedname, setEname] = React.useState("")
    // const [brandname, setbrandname] = React.useState("")


 
    const updaet = async () => {
     
        let resp= await addBrand(editeedname)
        if(resp.isExecuted){
            history.push('/brand')

        }
        else {
            console.log("something went wrong");
        }

    }
    const cancle = ()=>{
        setEname("");
        history.push('/brand')
    }
    return (
        <div>
            <div>


                <div className="TextForm">
                    <h2>Brands</h2>
                   <div className="buttons">
                        <div className="bttn">
                            <Button variant="contained" color="primary"  onClick={() =>cancle()}>
                                Cancel
                            </Button>
                        </div>

                        <div className="bttn">
                            <Button variant="contained" color="primary"disabled={editeedname?false:true} onClick={()=>updaet()}>
                                Save
                            </Button>
                        </div>

                    </div>
                  




                </div>






            </div>

            <div>


                <TextField
                    id="filled-secondary"
                    label="Brand name"
                    variant="filled"
                    color="secondary"
                    value={editeedname}
                    onChange={(e)=>{setEname(e.target.value)}}  
                />
            </div>

        </div>
    )
}

export default Brand_add
