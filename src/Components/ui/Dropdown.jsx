import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };

  return (
    <div className="relative w-52 font-semibold">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 bg-white shadow-md rounded-md"
      >
        <span>{selectedRegion || "Filter by Region"}</span>
        <ChevronDown
          size={20}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white shadow-md rounded-md p-4 z-10">
          <ul className="space-y-2">
            {regions.map((region) => (
              <li
                key={region}
                onClick={() => handleSelectRegion(region)}
                className="cursor-pointer hover:text-gray-500"
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
