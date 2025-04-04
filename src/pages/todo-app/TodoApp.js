import React, { useState, useEffect } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import { TODO_STATUS } from "../../const/var";
import { TODO, APP } from "../../const/message";
import { useNavigate } from "react-router-dom";
import {
  getTodosByUser,
  addTodo,
  editTodo,
  deleteTodo,
} from "../../api/todo/todoApi";
import {
  useCurrentUserId,
  createTodoItem,
  editTodoItem,
} from "../../utils/function";
import { toast } from "react-toastify";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoValue] = useState("");
  const userId = useCurrentUserId();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const user = localStorage.getItem("user");
      if (!user) {
        toast.error(APP.NOT_LOGIN_AND_REDIRECT);
        navigate("/login");
      }
    };
    checkUser();
    // Listen for changes in localStorage
    const handleStorageChange = () => {
      checkUser();
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate]);

  useEffect(
    () => async () => {
      const todoList = await getTodosByUser(userId);
      setTodoList(todoList);
    },
    [userId]
  );

  const addTodoList = async () => {
    if (!todoInput.trim()) {
      return;
    }
    if (todoList.includes(todoInput.trim())) {
      toast.error(TODO.TODO_EXIST);
      return;
    }
    const newTodo = createTodoItem({ title: todoInput, userId: userId });
    const response = await addTodo(newTodo);
    if (response) {
      setTodoList((prevTodoList) => [...prevTodoList, response]);
      setTodoValue("");
    } else {
      toast.error(TODO.ADD_FAILED, response);
    }
  };

  const changeStatus = async (id) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    if (index === -1) {
      toast.error(TODO.TODO_NOT_FOUND);
      return;
    }
    const changedItem = todoList[index];
    const updateItem = {
      ...changedItem,
      status:
        changedItem.status === TODO_STATUS.done
          ? TODO_STATUS.notDone
          : TODO_STATUS.done,
    };
    const updateTodo = editTodoItem(updateItem);
    const response = await editTodo(updateTodo, changedItem.id);
    if (response) {
      setTodoList((prevTodoList) =>
        prevTodoList.map((todo, i) => (i === index ? response : todo))
      );
      toast.success(TODO.UPDATE_SUCCESS);
    } else {
      toast.error(TODO.CHANG_STATUS_FAILED, response);
    }
  };

  const deleteTodoItem = async (id) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    if (index === -1) {
      toast.error(TODO.TODO_NOT_FOUND);
      return;
    }
    const deletedItem = todoList[index];
    const response = await deleteTodo(deletedItem.id);
    if (response) {
      setTodoList((prevTodoList) => prevTodoList.filter((_, i) => i !== index));
      toast.success(TODO.DELETE_SUCCESS);
    } else {
      toast.error(TODO.DELETE_FAILED, response);
    }
  };

  return (
    <div className="App text-center">
      <h2>What to do:</h2>
      <TodoInput
        todoInput={todoInput}
        setTodoValue={setTodoValue}
        addTodoList={addTodoList}
      />
      <div className="todo-container">
        <TodoList
          todoList={todoList}
          changeStatus={changeStatus}
          deleteTodo={deleteTodoItem}
        />
      </div>
    </div>
  );
}

export default TodoApp;
