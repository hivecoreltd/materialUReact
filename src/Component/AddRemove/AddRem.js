import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./AddRem.css";





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

      <div class="flex_display">
        <div class="name">
        <p>Name :</p> 
        </div>
        <div class="texts">
          <TextField id="standard-basic" label="Standard"
            type="text"
            placeholder="Enter text"
            value={fields}
            onChange={e => setFields(e.target.value)}
          />
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

          <div className="box flex_display">
            <div className="firstbox">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                className="fieldName"

                name="fieldName"
                placeholder="Enter Last Name"
                value={x.fieldName}
                onChange={e => handleInputChange(e, i)}
              />
            </div>

            <div className="secondbox">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"

                className="fieldType"

                name="fieldType"
                placeholder="Enter Onno Kisu"
                value={x.fieldType}
                onChange={e => handleInputChange(e, i)}
              /></div>


            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default AddRem;
