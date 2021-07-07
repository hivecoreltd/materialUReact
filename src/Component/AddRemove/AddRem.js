import React, { useState } from "react";

function AddRem() {
  // const [inputList, setInputList] = useState([{ Name: "", lastName: "" }]);
  const [inputList, setInputList] = useState([{}]);
  const [fields, setFields] = useState([{ value: null }]);
  //{ name : "", fields : [ { fieldNmae: "" , fieldType : "" } ] }

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
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
    setInputList([...inputList, { name: "", fields: [{ fieldNmae: "", fieldType: "" }] }]);
  };

  return (
    <div className="App">


      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Enter text"
              value={field.value || ""}
              onChange={e => handleChange(idx, e)}
            />

          </div>
        );
      })}

      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              className="fieldNmae"
              name="fieldNmae"
              placeholder="Enter Last Name"
              value={x.fieldNmae}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="fieldType"
              name="fieldType"
              placeholder="Enter Onno Kisu"
              value={x.fieldType}
              onChange={e => handleInputChange(e, i)}
            />
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
