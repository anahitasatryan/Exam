import React from "react";
import Button from "../Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created:", user);

      history("/examComponent");
    } catch (error) {
      alert("Error creating user:", error.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className="auth-input" placeholder="Username" name="username" />
        <input className="auth-input" placeholder="Email" name="email" />
        <input
          className="auth-input"
          placeholder="Password"
          type="password"
          name="password"
        />
        <Button type="submit" name="Sign In" />
      </form>
    </div>
  );
};

export default Auth;
