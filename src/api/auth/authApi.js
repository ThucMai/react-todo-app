import { API } from "../../const/var";
import { simulateNetworkDelay } from "../../utils/function";

export const login = async (username, password) => {
  try {
    const response = await fetch(
      `${API.BASE_API_URL}/users?username=${username}&password=${password}`
    );
    const users = await response.json();
    return simulateNetworkDelay(users.length > 0 ? users[0] : null);
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};
