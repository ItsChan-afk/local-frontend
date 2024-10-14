import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Send request to logout route
        await axios.get("http://localhost:4040/api/exam/logout", {
          withCredentials: true, // Ensure the cookie is sent
        });

        // Redirect to login after logout
        navigate("/login");
      } catch (error) {
        console.error("Logout failed", error);
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Logging out...</h1>
    </div>
  );
};

export default Logout;
