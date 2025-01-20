import React, { useState } from "react";
import { createTodoList } from "./jsHelpers";

const CustomTodo = () => {
  const [todos, setTodos] = useState(createTodoList());
  return (
    <>
      <h3>Custom Todo</h3>
<ol>
      {todos.map((eachTodo) => {
        return <li>{eachTodo.name}</li>;
      })}
      </ol>
    </>
  );
};

export default CustomTodo;
