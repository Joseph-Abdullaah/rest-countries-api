import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

function Dropdown({ value, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = (region) => {
    onSelect(region === value ? "" : region);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative w-52 font-semibold text-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-4 bg-white dark:bg-blue-900 shadow-md rounded-md text-grey-950 dark:text-white transition-colors duration-300"
      >
        <span>{value || "Filter by Region"}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute w-full mt-1 bg-white dark:bg-blue-900 shadow-md rounded-md py-4 z-10 transition-colors duration-300">
          <ul className="flex flex-col">
            {regions.map((region) => (
              <li
                key={region}
                onClick={() => handleSelect(region)}
                className={`px-6 py-1.5 cursor-pointer hover:bg-grey-50 dark:hover:bg-blue-950/40 text-grey-950 dark:text-white transition-colors duration-150 ${
                  value === region ? "font-bold" : ""
                }`}
              >
                {region}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
