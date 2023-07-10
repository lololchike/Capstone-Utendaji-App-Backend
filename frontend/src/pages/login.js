import "../css-files/login.css";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContex";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate(); // Move useNavigate hook outside of the login function

  const login = async () => {
    try {
      setIsLoading(true);
      setError(null);
      setShowError(false);
      const response = await axios.post("http://localhost:4000/login", {
        password,
        userName: userName.toUpperCase(),
      });

      const json = response.data;
      localStorage.setItem("currentUser", JSON.stringify(json));
      const user = json.user; // Remove unnecessary JSON.stringify()
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      
      if (user.role === "Admin") { 
        navigate("/admin"); 
      }
      else if (user.role === "Manager") { 
        navigate("/manager"); 
      }
      else if (user.role === "Employee") { 
        navigate("/employee"); 
      }
    } catch (error) {
      setError(error.response.data.error);
      setShowError(true);
      setIsLoading(false);
    }
  };

  return (
    <div id="login">
      <div id="loginForm">
        <img src="logo.JPG" alt="logo" id="login-logo" />
        <div id="Welcome-message">
          <h2 id="login-welcome-h2">Welcome to Utendaji</h2>
          <strong>
            <p id="login-welcome-p">Maximizing Effort</p>
          </strong>
        </div>
        <label htmlFor="login-ursername">Username</label>
        <input
          type="text"
          id="login-ursername"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="login-password">Password</label>
        <input
          type="password" // Use "password" instead of "Password"
          id="login-password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="sign-in-button" onClick={login} disabled={isLoading}>
          Continue
        </button>
        {showError && <p className="error">{error}</p>}
      </div>
    </div>
  );
};
export default Login;
