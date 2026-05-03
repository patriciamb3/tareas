import { useTasksContext } from "../context/TasksContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTasksContext();

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
        
      ))}
    </div>
  );
};

export default TaskList;