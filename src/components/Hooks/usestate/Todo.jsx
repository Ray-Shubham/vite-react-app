import React, { useState } from "react";
import { createTodoList } from "./jsHelpers";

const CustomTodo = () => {
  const [todos, setTodos] = useState(createTodoList());

  const addToDoHandler = () => {
    const currentLength = todos.length;
    const myObject = {
      id: currentLength + 1,
      name: `Item ${currentLength + 1}`,
    };
    setTodos([...todos, myObject]);
  };

  const deleteHandler = (targetId) => {
    const filteredItems = todos.filter((eachTodo) => eachTodo.id !== targetId);
    setTodos(filteredItems);
  };
  return (
    <>
      <h3>Custom Todo</h3>
      <button onClick={addToDoHandler}>Add</button>
      <ol>
        {todos.map((eachTodo) => {
          const { id, name } = eachTodo;
          return (
            <React.Fragment key={id}>
              <li>{name}</li>
              <button onClick={deleteHandler(id)}>Delete</button>
            </React.Fragment>
          );
        })}
      </ol>
    </>
  );
};

export default CustomTodo;
