import React from "react";
import { Link } from "react-router";

function CountryCard({ country }) {
  const { flags, name, population, region, capital, cca3 } = country;

  return (
    <Link
      to={`/country/${cca3}`}
      className="bg-white dark:bg-blue-900 rounded-md shadow-md overflow-hidden w-full cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <img
        src={flags.svg}
        alt={flags.alt || `Flag of ${name.common}`}
        className="w-full h-40 object-cover"
        loading="lazy"
      />
      <div className="p-6 pb-10">
        <h2 className="font-extrabold text-base mb-4 text-grey-950 dark:text-white">
          {name.common}
        </h2>
        <p className="text-sm text-grey-950 dark:text-white mb-1">
          <span className="font-semibold">Population: </span>
          {population.toLocaleString()}
        </p>
        <p className="text-sm text-grey-950 dark:text-white mb-1">
          <span className="font-semibold">Region: </span>
          {region}
        </p>
        <p className="text-sm text-grey-950 dark:text-white">
          <span className="font-semibold">Capital: </span>
          {capital?.join(", ") || "N/A"}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
