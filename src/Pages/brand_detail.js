import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import { Button, Fab, TextField } from '@material-ui/core';
import { getSpecificBrand,updateBrand } from "../Services/Servis"
import ReactDOM from "react-dom";
import {
useHistory,
  useParams
} from "react-router-dom";

import "./Display.css";


function Brand_detail() {
    const [edit_enable, setEdit] = React.useState(false)
    const [name, setname] = React.useState("")
    const [id, setid] = React.useState("")
    const [editeedname, setEname] = React.useState("")
    // const [brandname, setbrandname] = React.useState("")
     let { brandname } = useParams();

  React.useEffect(async () => {
    let res = await getSpecificBrand(brandname);
    if (res.isExecuted) { setname(res.data.name); setEname(res.data.name);setid(res.data._id)}

  }, [brandname])
    const updaet = async () => {
        let resp= await updateBrand(id,editeedname)
        if(resp.isExecuted){
            setname(editeedname);
            setEdit(false)
        }
        else {
            console.log("something went wrong");
        }

    }
    const cancle = ()=>{
        setEname(name);
        setEdit(false)
    }
    return (
        <div>
            <div>


                <div className="TextForm">
                    <h2>Brands</h2>
                    {edit_enable && <div className="buttons">
                        <div className="bttn">
                            <Button variant="contained" color="primary" onClick={() =>cancle()}>
                                Cancel
                            </Button>
                        </div>

                        <div className="bttn">
                            <Button variant="contained" color="primary" onClick={()=>updaet()}>
                                Save
                            </Button>
                        </div>

                    </div>}
                    {!edit_enable &&
                        <div className="buttons">
                            <Fab color="secondary" aria-label="edit" onClick={() => setEdit(true)}>
                                <EditIcon />
                            </Fab>
                        </div>
                    }




                </div>






            </div>

            <div>


                <TextField
                    id="filled-secondary"
                    label="Brand Name"
                    variant="filled"
                    color="secondary"
                    disabled={!edit_enable}
                    value={editeedname}
                    onChange={(e)=>{setEname(e.target.value)}}  
                />
            </div>

        </div>
    )
}

export default Brand_detail
