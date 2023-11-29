'use client'
import { createContext, useContext, useState } from 'react';

const CompletedTasksContext = createContext();

const CompletedTasksProvider = ({ children }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const addCompletedTask = (task) => {
    setCompletedTasks([...completedTasks, task]);
  };

  return (
    <CompletedTasksContext.Provider value={{ completedTasks, addCompletedTask }}>
      {children}
    </CompletedTasksContext.Provider>
  );
};

const useCompletedTasks = () => {
  return useContext(CompletedTasksContext);
};

export { CompletedTasksProvider, useCompletedTasks };
