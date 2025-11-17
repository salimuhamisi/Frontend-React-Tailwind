import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow p-4 mt-10">
      <p className="text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} React Assignment — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;