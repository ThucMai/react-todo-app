import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { APP } from "../const/message";
import { toast } from "react-toastify";

function Login() {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const pathBefore = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      toast.info(APP.ALREADY_LOGIN);
      navigate(pathBefore);
    }
  }, [user, pathBefore, navigate]);

  const handleLogin = async () => {
    if (!username.trim() || !password) {
      toast.error(APP.REQUIRE_USERNAME_AND_PASSWORD);
      return;
    }
    const loginResult = await login(username, password);
    if (loginResult) {
      toast.success(APP.LOGIN_SUCCESS);
      navigate(pathBefore);
    } else {
      toast.error(APP.LOGIN_FAILED);
    }
  };

  return (
    <div className="text-center mt-5">
      <h2 className="me-4">Login</h2>
      <div className="login-from-container d-flex flex-column justify-content-center align-items-center">
        <div className="login-form-input d-flex align-items-center mb-4">
          <p className="text-center d-inline me-3 mb-0">Username</p>
          <input
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />
        </div>
        <div className="password-text d-flex align-items-center mb-4">
          <p className="text-center d-inline me-3 mb-0">Password</p>
          <input
            className="login-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />
        </div>
      </div>
      <button className="btn btn-success" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
