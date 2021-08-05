import React, { useState } from "react";
// import TextField from '@material-ui/core/TextField';
import "./Display.css";
// import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Box from '@material-ui/core/Box';
import {Button,Fab,TextField} from '@material-ui/core';




function AddRem() {

  // const [inputList, setInputList] = useState([{ Name: "", lastName: "" }]);
  const [inputList, setInputList] = useState([{}]);
  const [fields, setFields] = useState([""]);
  //{ name : "", fields : [ { fieldName: "" , fieldType : "" } ] }


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
        <div class="name">
          <p>Name :</p>
        </div>
        <br></br>
        <div class="nameBox">
          <Box component="div" display="inline">Here The name will go</Box>
        </div>


      </div>

      <br />
      <br />
      <br />

      <label>Field Require for This Catagory</label>
      <br />
      <br />
      {inputList.map((x, i) => {
        return (
          <div className="container">
            <div className="boxOne">
              <Box component="div" display="inline">Here The name will go</Box>
            </div>

            <div className="boxTwo">
              <Box component="div" display="inline">Here The name will go</Box>


              {/* {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>} */}

            </div>

          </div>

        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default AddRem;
