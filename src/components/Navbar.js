import { useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { SettingContext } from "../context/SettingContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(SettingContext);
  const location = useLocation();
  const showHomeButton = location.pathname !== "/";

  return (
    <div className="navbar align-items-center">
      <div className="text-container">
        {showHomeButton && (
          <h1 className="text-center">
            <a href="/" className="text-left">
              Todo App VP
            </a>
          </h1>
        )}
      </div>
      <div className="theme-toggle-container">
        <div className="theme-wrapper d-flex align-items-center justify-content-center">
          <p className="theme-text mb-0 me-2">Theme</p>
          <button
            type="button"
            className={`btn btn-${theme === "dark" ? "dark" : "light"}`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
      <div className="user-container">
        {user ? (
          <div className="user-info">
            <span className="username">{user.username}</span>
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </div>
        ) : location.pathname !== "/login" ? (
          <div className="user-login">
            <a href="/login" className="login-button">
              Login
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
