import { useTasksContext } from "../context/TasksContext";

const FilterButtons = () => {
  const { setFilter } = useTasksContext();

  return (
    <>
      <button onClick={() => setFilter("all")}>Todas las tareas</button>
      <button onClick={() => setFilter("completed")}>Tareas completadas</button>
      <button onClick={() => setFilter("pending")}>Tareas pendientes</button>
    </>
  );
};

export default FilterButtons;