import React from "react";
import CountryCard from "./CountryCard";

// Test data for countries
const countries = [
  {
    name: {
      common: "Germany",
    },
    population: 81770900,
    region: "Europe",
    capital: ["Berlin"],
    flags: {
      svg: "https://flagcdn.com/de.svg",
    },
    cca3: "DEU",
  },
  {
    name: {
      common: "United States of America",
    },
    population: 323947000,
    region: "Americas",
    capital: ["Washington, D.C."],
    flags: {
      svg: "https://flagcdn.com/us.svg",
    },
    cca3: "USA",
  },
  {
    name: {
      common: "Brazil",
    },
    population: 206135893,
    region: "Americas",
    capital: ["Brasília"],
    flags: {
      svg: "https://flagcdn.com/br.svg",
    },
    cca3: "BRA",
  },
  {
    name: {
      common: "Iceland",
    },
    population: 334300,
    region: "Europe",
    capital: ["Reykjavík"],
    flags: {
      svg: "https://flagcdn.com/is.svg",
    },
    cca3: "ISL",
  },
  {
    name: {
      common: "Afghanistan",
    },
    population: 40218234,
    region: "Asia",
    capital: ["Kabul"],
    flags: {
      svg: "https://flagcdn.com/af.svg",
    },
    cca3: "AFG",
  },
  {
    name: {
      common: "Åland Islands",
    },
    population: 28875,
    region: "Europe",
    capital: ["Mariehamn"],
    flags: {
      svg: "https://flagcdn.com/ax.svg",
    },
    cca3: "ALA",
  },
  {
    name: {
      common: "Albania",
    },
    population: 2837743,
    region: "Europe",
    capital: ["Tirana"],
    flags: {
      svg: "https://flagcdn.com/al.svg",
    },
    cca3: "ALB",
  },
  {
    name: {
      common: "Algeria",
    },
    population: 44700000,
    region: "Africa",
    capital: ["Algiers"],
    flags: {
      svg: "https://flagcdn.com/dz.svg",
    },
    cca3: "DZA",
  },
];

function CountryGrid({ isLoading, error }) {
  if (isLoading) {
    return (
      <div className="mt-16 text-center text-2xl">Loading countries...</div>
    );
  }

  if (error) {
    return (
      <div className="mt-16 text-center text-2xl">Error: {error.message}</div>
    );
  }

  if (!countries || countries.length === 0) {
    return (
      <div className="mt-16 text-center text-2xl">No countries found.</div>
    );
  }

  return (
    <section className="mx-auto grid max-w-360 grid-cols-1 gap-16 md:gap-23 px-8 md:px-18.5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
        />
      ))}
    </section>
  );
}

export default CountryGrid;
