import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import "./AddRem.css";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';





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
          <p>Name</p>
        </div>
        <div className="butnsave">
          <Button
            variant="contained"
            color="primary">
            <SaveIcon />
          </Button>
        </div>
        <div class="">
          <TextField id="outlined" label="Name"
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
