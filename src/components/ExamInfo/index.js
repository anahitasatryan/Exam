import React from "react";
import "./style.scss";
import Button from "../Button";

const ExamInfo = ({ onOKClick }) => {
  return (
    <div className="exam-info-box">
      <div className="exam-info-content">
        <p className="exam-info-text">
          Welcome to the Exam! This is your chance to showcase your knowledge
          and skills.
        </p>
        <p className="exam-info-text">
          Make sure to manage your time wisely, and good luck!
        </p>
        <p className="exam-info-text">
          Before you begin, please choose your department
        </p>
        <Button name="OK" onClick={onOKClick} />
      </div>
    </div>
  );
};

export default ExamInfo;
