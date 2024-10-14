import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Result = () => {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:4040/api/exam/results",
        'https://local-backend-inky.vercel.app/api/exam/results',
          { withCredentials: true }
        ); // Update with your API endpoint
        console.log(response.data);
        setResults(response.data);
      } catch (err) {
        setError("Error fetching results. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="text-blue-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full h-auto mt-10">
      <div className="border-2 border-purple-200 rounded-lg shadow-lg p-6 w-[50%] bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Your Results</h2>
        <p className="text-lg font-semibold">Score: {results.results}</p>
        <p className="text-lg font-semibold">Name : {results.fullname}</p>
        <p className="text-lg">User Id : {results._id}</p>
        <Link className="bg-red-400 p-1 border-2 border-red-700" to="/logout">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Result;
