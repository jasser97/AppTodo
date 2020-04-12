import React, { useState } from "react";
// import DisplayList from "./DisplayList";
import "./App.css";
import EditComp from "./components/EditComp";
import AddComp from "./components/AddComp";
import TodoList from "./components/TodoList";

const App = (props) => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [editMode, setEditMode] = useState(true);
  const [newTodos, setNewTodos] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handelAdd = (e) => {
    if (value) {
      setTodos(todos.concat(value));
    }
    e.preventDefault();
    setValue("");
  };

  const handleDelete = (id) => {
    setNewTodos({ ...newTodos, name: "" });
    setEditMode(true);
    return setTodos(
      todos.filter((el, idEl) => {
        return idEl !== id;
      })
    );
  };
  const handleClick = (el, i) => {
    setNewTodos({ name: el, id: i });
    setEditMode(false);
  };
  const handleEdit = () => {
    setTodos(todos.map((el, i) => (i === newTodos.id ? newTodos.name : el)));
    setEditMode(true);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#797e83",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {editMode ? (
          <AddComp
            value={value}
            handleChange={handleChange}
            handelAdd={handelAdd}
          />
        ) : (
          <EditComp
            handleEdit={handleEdit}
            setNewTodos={setNewTodos}
            newTodos={newTodos}
          />
        )}

        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};
export default App;
