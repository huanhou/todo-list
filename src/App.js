import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTasks = [...newTasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} toggleComplete={toggleComplete} />
    </div>
  );
}
export default App;
