import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handelSubmit = async (e) => {
    e.preventDefault();
    // console.log(email,password);
    await signup(email, password);
  };  

  return (
    <form className="signup" onSubmit={handelSubmit}>
      <h4 className="header-text">Sign Up</h4>

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

      <button className="login-btn" disabled={isLoading}>
        Sign Up
      </button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default SignUp;
