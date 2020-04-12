import React from "react";
import TdoItem from "./TdoItem";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((el, id) => (
        <TdoItem
          key={id}
          el={el}
          id={id}
          handleDelete={props.handleDelete}
          handleClick={props.handleClick}
        />
      ))}
    </div>
  );
};

export default TodoList;
