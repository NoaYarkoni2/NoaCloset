import React from "react";
import { useState } from "react";
import { users, USER_TYPES } from "../../store/Users";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigte = useNavigate();

  const checkPermission = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser.role === USER_TYPES.ADMIN_USER) {
      navigte("/admin");
    } else {
      navigte("/");
    }
  };

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      checkPermission();
    } else {
      // console.log("user was not found!!");
      alert("user was not found!!");
    }
  };

  return (
    <>
      <div className="login-page">
        {/* <h4>Login</h4> */}
        <form>
          <div className="input-box">
            <label htmlFor="">Email:</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-box">
            <label htmlFor="">Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div>
            <input type="checkbox" name="" id=""></input>
            <label htmlFor="Remeber Me"></label>
          </div> */}
          {/* <span>Forgot Password?</span>
          <button type="submit"> Login</button> */}
          <div>
            <span>
              New Here? <Link to="Register">Create an Account</Link>
            </span>
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
