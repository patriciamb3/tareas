import { createContext, useContext } from "react";
import { useTasks } from "../hooks/useTasks";

const TasksContext = createContext();

export const TaskProvider = ({ children }) => {
  const tasksData = useTasks();

  return (
    <TasksContext.Provider value={tasksData}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);