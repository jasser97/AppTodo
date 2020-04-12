import React from "react";

const AddComp = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px ",
      }}
    >
      <input
        type="text"
        value={props.value}
        placeholder="Add New Value"
        onChange={props.handleChange}
        style={{ width: 350, height: 20, marginRight: 10, textAlign: "center" }}
      />
      <button onClick={props.handelAdd} style={{ height: 25 }}>
        Add Todo
      </button>
    </div>
  );
};

export default AddComp;
