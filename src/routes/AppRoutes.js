import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import TodoApp from "../pages/todo-app/TodoApp";
import Login from "../pages/Login";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function AppRoutes() {
  function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    return user ? (
      children
    ) : (
      <Navigate to="/login" state={{ from: location }} />
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/todo-app"
        element={
          <PrivateRoute>
            <TodoApp />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
