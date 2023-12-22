import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import Animation from "../Animation/index";
import Button from "../Button";

const Header = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header-name">
        <div className="animation-container">
          <Animation />
        </div>
        <h1>EXAM</h1>
      </div>
      <Button name="Sign up" onClick={handleSignUpClick} />
    </div>
  );
};

export default Header;
