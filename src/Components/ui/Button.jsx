import React from "react";

function Button({ children, shadow, onClick, className = "" }) {
  return (
    <button
      className={`text-sm font-light px-5 py-2 rounded-sm flex gap-2 items-center bg-white dark:bg-blue-900 text-grey-950 dark:text-white transition-colors duration-300 ${className} ${
        shadow ? "shadow-md" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
