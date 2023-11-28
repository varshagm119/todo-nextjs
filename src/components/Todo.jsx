import React from "react";
import classes from "./Todo.module.css";

const Todo = () => {
  return (
    <div>
      <div className={classes.inpt}>
        <h1>Add a to do</h1>
        <input
          type="text"
          placeholder="add a todo"
          className={classes.inputBox}
        />
        <button style={{ boxSizing: 'border-box', background: 'pink', width: '60px', height: '40px' }}>Add</button>
      </div>
    </div>
  );
};

export default Todo;
