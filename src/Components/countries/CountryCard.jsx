import React from "react";

function CountryCard({ flag, name, population, region, capital }) {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden w-64 cursor-pointer hover:shadow-xl transition-shadow">
      <img
        src={flag}
        alt={`Flag of ${name}`}
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h2 className="font-extrabold text-lg mb-4">{name}</h2>
        <p>
          <span className="font-semibold">Population:</span>{" "}
          {population.toLocaleString()}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p>
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
