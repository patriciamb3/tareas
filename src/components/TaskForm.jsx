import { useState } from "react";
import { useTasksContext } from "../context/TasksContext";

const TaskForm = () => {
  const { addTask } = useTasksContext();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert("El título de la tarea es obligatorio");
      return;
    }

    addTask(title, "");
    setTitle("");

  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)}
      placeholder="Introduce la tarea"
      style={{
        width: '80%',
        padding: '0.75rem',
        fontSize: '1rem',
        boxSizing: 'border-box',
      }} />
      <button
      style={{
        width: '20%',
        padding: '0.75rem',
        fontSize: '1rem',
        boxSizing: 'border-box',
      }}>
        Añadir</button>
    </form>
  );
};

export default TaskForm;