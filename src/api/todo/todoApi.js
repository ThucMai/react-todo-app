import { API } from "../../const/var";
import { validateTodo, simulateNetworkDelay } from "../../utils/function";

export const getTodosByUser = async (userId) => {
  try {
    const response = await fetch(`${API.BASE_API_URL}/todos?user_id=${userId}`);
    return simulateNetworkDelay(response.json());
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

export const addTodo = async (todoItem) => {
  if (!validateTodo(todoItem)) {
    return [];
  }
  try {
    const response = await fetch(`${API.BASE_API_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoItem),
    });
    return simulateNetworkDelay(response.json(), 500);
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

export const editTodo = async (updateItem, id) => {
  if (!updateItem) {
    return;
  }
  try {
    const response = await fetch(`${API.BASE_API_URL}/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateItem),
    });
    return simulateNetworkDelay(response.json(), 500);
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${API.BASE_API_URL}/todos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return simulateNetworkDelay(response.json(), 500);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};
