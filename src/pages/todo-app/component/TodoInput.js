import React from "react";

function TodoInput({ todoInput, setTodoValue, addTodoList }) {
  return (
    <div className="d-flex justify-content-center">
      <input
        type="text"
        className="add-todo-input me-2"
        name="todoValue"
        placeholder="Add Todo here..."
        value={todoInput}
        onChange={(e) => setTodoValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodoList();
          }
        }}
      />
      <button onClick={addTodoList} className="btn btn-primary">
        Add Todo List
      </button>
    </div>
  );
}

export default TodoInput;
