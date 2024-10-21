import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Exam() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "http://localhost:4040/api/exam/questions",
          { withCredentials: true }
        );
        setQuestions(response.data.storedData);
      } catch (error) {
        console.error("Error fetching questions", error);
      }
    }
    getData();
  }, []);

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const submitAnswer = async () => {
    try {
      console.log("Submitting answers : ", selectedAnswers);
      const response = await axios.post(
        // "http://localhost:4040/api/exam/answer",
        "https://local-backend.onrender.com/api/exam/answer",
        selectedAnswers,
        { withCredentials: true }
      );
      console.log("Submitted answers:", response.data);
      navigate("/result");
    } catch (error) {
      console.error("Error submitting answers", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-500">
          Exam Questions
        </h1>
        {questions.map((question) => (
          <div key={question._id} className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{question.question}</h3>
            <ul className="space-y-2">
              {question.options.map((option, index) => (
                <li key={index}>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name={question._id}
                      value={option}
                      checked={selectedAnswers[question._id] === option}
                      onChange={() => handleOptionChange(question._id, option)}
                      className="form-radio h-5 w-5 text-blue-500"
                    />
                    <span className="text-lg">{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          className="w-full mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={submitAnswer}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
}

export default Exam;
