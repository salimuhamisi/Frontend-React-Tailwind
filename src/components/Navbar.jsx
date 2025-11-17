import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          React + Tailwind App
        </h1>

        <Button
          onClick={() => navigate("/")}
          variant="secondary"
          size="sm"
        >
          TASK MANAGER
        </Button>


        <Button
          onClick={() => navigate("/api")}
          variant="secondary"
          size="sm"
        >
          FETCH API DATA
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
