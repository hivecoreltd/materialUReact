import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import "./AddRem.css";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';


import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { addcategory } from "../../Services/Servis";
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
  let history = useHistory();

  const classes = useStyles();

  // const [inputList, setInputList] = useState([{ Name: "", lastName: "" }]);
  const [inputList, setInputList] = useState([{}]);
  const [fields, setFields] = useState("");
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
    let res = await addcategory(body)
    if (res.isExecuted)
      history.push('/category')
    else console.log('something went wrong ', res)
  }
  const handel_cancle = async () => {
    setFields("");
    let list = [{ fieldName: "", fieldType: "" }]
    setInputList(list)
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
          <Button style={{ marginRight: '4px' }}
            variant="contained"
            onClick={() => handel_save()}
            color="primary">
            <SaveIcon />
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => handel_cancle()}>
            <CancelIcon />
          </Button>
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

          <div className="box flex_display">
            <div className="firstbox">
              <TextField
                id="outlined-basic"
                label="property name"
                variant="outlined"
                className="fieldName"

                name="fieldName"
                placeholder="Enter Last Name"
                value={x.fieldName}
                onChange={e => handleInputChange(e, i)}
              />
            </div>

            <div className="secondbox">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">property type</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="fieldType"
                  value={x.fieldType}
                  onChange={e => handleInputChange(e, i)}
                  label="property type"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Text"}>Text</MenuItem>
                  <MenuItem value={"Number"}>Number</MenuItem>
                </Select>
              </FormControl></div>


            <div className="btn-box flex_display">
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
            </div>
          </div>
        );
      })}

    </div>
  );
}

export default AddRem;
