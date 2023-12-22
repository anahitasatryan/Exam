import React, { useState } from "react";
import "./style.scss";

const ExamSelection = ({ onSelect }) => {
  const departments = ["HTML", "CSS", "React", "JavaScript"];
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleDepartmentSelection = (department) => {
    setSelectedDepartment(department);
    onSelect(department);
  };

  return (
    <div className="exam-selection">
      <div className="exam-selection-container">
        <h1>Choose Your Exam Department</h1>
        <div className="department-buttons">
          {departments.map((department) => (
            <ExamButton
              key={department}
              department={department}
              selected={selectedDepartment === department}
              onSelect={handleDepartmentSelection}
            />
          ))}
        </div>
        {selectedDepartment && <p>Selected Department: {selectedDepartment}</p>}
      </div>
    </div>
  );
};

const ExamButton = ({ department, selected, onSelect }) => {
  return (
    <button
      className={selected ? "selected" : ""}
      onClick={() => onSelect(department)}
    >
      {department}
    </button>
  );
};

export default ExamSelection;
