//"use client"
import React from "react";
import classes from "./Todo.module.css";
import { useCompletedTasks } from "@/store/CompletedTasksContext";
import connect from "@/utils/db";
import { useState, useEffect } from "react";


  

const Todo = async() => {
    //const data = await getData();
    const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const { completedTasks, addCompletedTask } = useCompletedTasks();

  useEffect(() => {
    const fetchData = async () => {
      const db = await connect();
      const collection = db.collection("Task");
      const result = await collection.find({}).toArray();
      setTodos(result);
    };

    fetchData();
  }, []);

  const addTodo = async () => {
    if (newTodo.trim() !== "") {
      const db = await connect();
      const collection = db.collection("Task");
      await collection.insertOne({ text: newTodo, completed: false });

      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    const completedTask = updatedTodos[index];
    completedTask.completed = !completedTask.completed;
    setTodos(updatedTodos);

    if (completedTask.completed) {
      addCompletedTask(completedTask.text);
    }
  };
    
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
      <div className={classes.taskList}>
        {/* show the saved todo task from mongodb */}
      </div>
    </div>
  );
};

export default Todo;
