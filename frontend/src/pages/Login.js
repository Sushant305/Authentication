import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handelSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    await login(email,password)
  };

  return (
    <form className="login" onSubmit={handelSubmit}>
      <h4 className="header-text">Login Page</h4>

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />

      <label>password:</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />

      <button className="login-btn" disabled={isLoading}>LOGIN</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
