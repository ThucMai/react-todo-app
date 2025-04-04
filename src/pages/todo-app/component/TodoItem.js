import React from "react";

function TodoItem({ todo, index, changeStatus, deleteTodo }) {
  return (
    <li class="todo">
      <p className={`text-list ${todo.status === "Done" ? "Done" : ""}`}>
        {todo.title} - {todo.status}
      </p>
      <div class="todo-button">
        <button className="btn btn-info me-2" onClick={() => changeStatus(index)}>
          Make {todo.status === "Done" ? "not done" : "done"}
        </button>
        <button className="btn btn-danger" onClick={() => deleteTodo(index)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
