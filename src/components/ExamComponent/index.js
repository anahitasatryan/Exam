import React, { useState } from "react";
import Timer from "../Timer";
import QuestionList from "../QuestionList";
import ExamSelection from "../ExamSection";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import ExamInfo from "../ExamInfo";

const ExamComponent = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [timerExpired, setTimerExpired] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [showExamInfo, setShowExamInfo] = useState(true);
  const navigate = useNavigate();

  const handleDepartmentSelection = (department) => {
    setSelectedDepartment(department);
  };

  const handleTimeout = () => {
    setTimerExpired(true);
  };

  const handleFinishExam = () => {
    setExamFinished(true);
    navigate("/exam-finished");
  };

  const handleOKClick = () => {
    setShowExamInfo(false);
  };

  return (
    <div className="exam-container">
      {showExamInfo ? (
        <ExamInfo onOKClick={handleOKClick} />
      ) : (
        <div>
          <ExamSelection onSelect={handleDepartmentSelection} />
          {!examFinished && selectedDepartment && !timerExpired && (
            <div>
              <Timer duration={1800} onTimeout={handleTimeout} />
              <QuestionList department={selectedDepartment} />
              <Button name="Finish Exam" onClick={handleFinishExam} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExamComponent;
