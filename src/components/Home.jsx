import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function navigateRegister() {
    navigate("/register");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-6 text-indigo-600">
          Welcome to the Exam Web Page!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          You're about to take an important step, but don't worry—you're
          prepared! Keep calm, take your time, and carefully read each question.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Make sure all your answers are ready before submitting. Once you
          submit, there's no going back!
        </p>
        <p className="text-lg text-gray-700 mb-6 font-bold">
          Good luck! 🎉 You've got this!
        </p>
        <button
          onClick={navigateRegister}
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all"
        >
          Register for Exam
        </button>
      </div>
    </div>
  );
};

export default Home;
