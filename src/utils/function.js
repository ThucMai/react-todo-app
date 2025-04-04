import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { TODO_STATUS } from "../const/var";

export function useCurrentUserId() {
  const { user } = useContext(AuthContext);
  return user?.id;
}

export function validateTodo(todo) {
  if (!todo) {
    return false;
  }
  if (typeof todo.title !== "string" || todo.title.trim() === "") {
    return false;
  }
  if (todo.status && !Object.values(TODO_STATUS).includes(todo.status)) {
    return false;
  }
  if (todo.userId && typeof todo.userId !== "number") {
    return false;
  }
  return true;
}

export function simulateNetworkDelay(data, delayTime = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delayTime);
  });
}

export function generateTodo(data) {
  return {
    title: data.title,
    status: data.status || TODO_STATUS.notDone,
    user_id: data.user_id || data.userId,
  };
}

export function createTodoItem(data) {
  let item = generateTodo(data);
  item.created = new Date().toISOString();
  return item;
}

export function editTodoItem(data) {
  let item = generateTodo(data);
  item.updated = new Date().toISOString();
  return item;
}
