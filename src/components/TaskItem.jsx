import { useTasksContext } from "../context/TasksContext";

export default function TaskItem({ task }) {
  const { toggleTask } = useTasksContext();

  return (
    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button onClick={() => toggleTask(task.id)}
        style={{
          width: "15px",
          height: "15px",
          border: "2px solid black",
          backgroundColor: task.completed ? "#6c7999" : "transparent",
          cursor: "pointer",
        }}
      />

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>
    </li>
  );
}