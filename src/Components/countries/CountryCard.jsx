import React from "react";

function CountryCard({ country }) {
  const { flags, name, population, region, capital } = country;
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden w-64 cursor-pointer hover:shadow-xl transition-shadow">
      <img
        src={flags.svg}
        alt={`Flag of ${name.common}`}
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h2 className="font-extrabold text-lg mb-4">{name.common}</h2>
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
