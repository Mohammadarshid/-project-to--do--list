import React, { useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const App = () => {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  const DeleteListItem = (key) => {
    let newListodo = [...listTodo];
    newListodo.splice(key, 1);
    setListTodo([...newListodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">todo</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={DeleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
