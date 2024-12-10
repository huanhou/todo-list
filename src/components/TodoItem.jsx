import React from "react";

const TodoItem = ({ task, index, toggleComplete }) => {
  return (
    <li
      onClick={() => toggleComplete(index)}
      style={{
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      {task.text}
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
