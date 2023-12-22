import { Routes, Route } from "react-router-dom";
import * as React from "react";
import "./App.css";
import Exam from "./pages/Exam";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExamComponent from "./components/ExamComponent";
import ExamFinished from "./components/ExamFinished";

function App() {
  return (
    <div>
      <Header />
      <main className="main-app">
        <Routes>
          <Route path="/" element={<Exam />} />
          <Route path="/examComponent" element={<ExamComponent />} />
          <Route path="/exam-finished" element={<ExamFinished />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
