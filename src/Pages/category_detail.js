import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import "../Component/AddRemove/AddRem.css";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { deletecategory, getSpecificCategory, updatecategory } from "../Services/Servis";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import {
    useHistory,
    useParams
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formControl: {

        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function AddRem() {


    let { categoryid } = useParams();

    let history = useHistory();

    const classes = useStyles();

    // const [inputList, setInputList] = useState([{ Name: "", lastName: "" }]);
    const [inputList, setInputList] = useState([{}]);
    const [fields, setFields] = useState("");
    const [edit, setEdit] = useState(false);
    const [tdata, setData] = useState({});



    useEffect(async () => {
        let res = await getSpecificCategory(categoryid);
        if (res.isExecuted) { setFields(res.data.name); setInputList(res.data.properties); setData(res.data) }

    }, [categoryid])

    //{ name : "", fields : [ { fieldName: "" , fieldType : "" } ] }
    const checkarr = () => {
        let rr = []
        if (inputList.length) {
            rr = inputList.filter(x => x.fieldName !== '' && x.fieldType !== "")

        }
        if (rr.length) return rr
        else return rr
    }
    const handel_save = async () => {
        if (!fields) return
        let check = await checkarr()
        if (!check.length) return
        let body = {
            name: fields,
            properties: check
        }
        let res = await updatecategory(categoryid, body)
        if (res.isExecuted)
            history.push('/category')
        else console.log('something went wrong ', res)
    }
    const handel_delete = async () => {
        let res = await deletecategory(categoryid)
        if (res.isExecuted)
            history.push('/category')
        else console.log('something went wrong ', res)

    }
    const handel_cancle = async () => {
        setFields(tdata.name);
        setEdit(false)
        setInputList(tdata.properties)
    }


    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);

    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { fieldName: "", fieldType: "" }]);
    };


    return (

        <div className="App">
            <div class="">

                <div className="butnsave">
                    {!edit ? <Button style={{ marginRight: '4px' }}
                        variant="contained"
                        onClick={() => setEdit(true)}
                        color="primary">
                        <EditIcon />
                    </Button> : <Button style={{ marginRight: '4px' }}
                        variant="contained"
                        onClick={() => handel_save()}
                        color="primary">
                        <SaveIcon />
                    </Button>}

                    {edit ? <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handel_cancle()}>
                        <CancelIcon />
                    </Button> :
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handel_delete()}>
                            <DeleteIcon />
                        </Button>}
                </div>
                
                <div class="name">
                    <p>Category name</p>
                </div>
                <br />
                <br />
                <div class="">

                    <TextField id="outlined" label="Category name"
                        type="text"
                        variant="outlined"
                        placeholder="Enter text"
                        disabled={!edit}
                        value={fields}
                        onChange={e => setFields(e.target.value)}
                    />
                </div>


            </div>

            <br />
            <br />
            <label>Field Require for This Catagory</label>
            <br />
            <br />
            {inputList.map((x, i) => {
                return (

                    <div className="flex_display">
                        <div className="firstbox">
                            <TextField
                                id="outlined"
                                variant="outlined"
                                name="fieldName"
                                type='text'
                                // label='property'
                                value={x.fieldName}
                                disabled={!edit}
                                onChange={e => handleInputChange(e, i)}
                            />
                        </div>

                        <div className="secondbox">
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">{x.fieldType ? "property type" : "property type"}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="fieldType"
                                    value={x.fieldType == 'Text' ? "Text" : x.fieldType == 'Number' ? "Number" : "None"}
                                    onChange={e => handleInputChange(e, i)}
                                    label="property type"
                                    disabled={!edit}

                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"Text"}>Text</MenuItem>
                                    <MenuItem value={"Number"}>Number</MenuItem>
                                </Select>
                            </FormControl></div>


                        {edit&&<div className="btn-box flex_display">
                            <div className="additems">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAddClick}
                                >
                                    Add Items
                                </Button>
                            </div>

                            <div className="additems2">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleRemoveClick(i)}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>}
                    </div>
                );
            })}

        </div>
    );
}

export default AddRem;
