import React, { useRef } from "react";
import { Search } from "lucide-react";

function Input({ value, onChange }) {
  const inputRef = useRef(null);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="flex items-center gap-6 px-8 py-4 shadow-md rounded-md w-full max-w-120 cursor-text bg-white dark:bg-blue-900 transition-colors duration-300"
      onClick={handleContainerClick}
    >
      <Search size={18} className="text-grey-950 dark:text-white shrink-0" />
      <input
        ref={inputRef}
        className="w-full h-full text-sm outline-none font-light bg-transparent text-grey-950 dark:text-white placeholder:text-grey-400 dark:placeholder:text-white/60"
        type="text"
        placeholder="Search for a country..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
