import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-gradient-to-r from-purple-400 to-indigo-500 h-20 justify-between items-center shadow-lg">
      <Link className="font-bold ml-10 text-3xl text-white hover:text-purple-300 transition-colors duration-200" to="/">
        MTA
      </Link>
      <div className="flex m-10 space-x-8">
        <Link className="font-bold text-white hover:text-purple-300 transition-colors duration-200" to="/login">
          Login
        </Link>
        <Link className="font-bold text-white hover:text-purple-300 transition-colors duration-200" to="/register">
          Register
        </Link>
        <Link className="font-bold text-white hover:text-purple-300 transition-colors duration-200" to="/logout">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
