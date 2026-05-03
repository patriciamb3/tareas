import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const [filter, setFilter] = useState("all");

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return {
    tasks: filteredTasks,
    addTask,
    toggleTask,
    deleteTask,
    setFilter,
    filter,
  };
};