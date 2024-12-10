import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleComplete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
