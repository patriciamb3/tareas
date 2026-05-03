import { TaskProvider } from "./context/TasksContext";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm"; 
import FilterButtons from "./components/FilterButtons";

function App() {
  return (
    <TaskProvider>
      <div style={{ padding: '20px' }}> {}
        <Header />
        <TaskForm /> 
        <FilterButtons />
        <TaskList />

      </div>
    </TaskProvider>
  );
}

export default App;