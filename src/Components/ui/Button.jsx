import React from "react";
function Button({ children, shadow, onClick, className = "" }) {
  return (
    <button
      className={`text-base font-light px-4 py-2 rounded-sm flex gap-2 items-center ${className} ${
        shadow ? "shadow-md" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
