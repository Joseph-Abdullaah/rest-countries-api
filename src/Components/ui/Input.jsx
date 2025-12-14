import React, { useRef } from "react";
import { Search } from "lucide-react";
function Input() {
  const inputRef = useRef(null);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="flex items-center gap-4 p-4 shadow-md rounded-md max-w-120 cursor-text"
      onClick={handleContainerClick}
    >
      <Search />
      <input
        ref={inputRef}
        className="w-full h-full text-base outline-none font-semibold"
        type="text"
        placeholder="Search for a country.."
      />
    </div>
  );
}

export default Input;
