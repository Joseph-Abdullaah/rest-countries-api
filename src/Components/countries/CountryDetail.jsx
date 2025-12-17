import React from "react";
import Button from "../ui/Button";
import { MoveLeft } from "lucide-react";
// Placeholder data based on the design image for "Belgium"
const country = {
  name: {
    common: "Belgium",
    nativeName: {
      nld: {
        official: "Koninkrijk België",
        common: "België",
      },
    },
  },
  flags: {
    svg: "https://flagcdn.com/be.svg",
  },
  population: 11319511,
  region: "Europe",
  subregion: "Western Europe",
  capital: ["Brussels"],
  tld: [".be"],
  currencies: {
    EUR: {
      name: "Euro",
      symbol: "€",
    },
  },
  languages: {
    deu: "German",
    fra: "French",
    nld: "Dutch",
  },
  borders: ["FRA", "DEU", "LUX", "NLD"], // Using codes, will need to map to full names
};

// Placeholder for mapping border codes to names
const borderCountryNames = {
  FRA: "France",
  DEU: "Germany",
  NLD: "Netherlands",
  LUX: "Luxembourg",
};

function CountryDetail() {
  // Data processing for display
  const nativeName = Object.values(country.name.nativeName)[0]?.common;
  const currencies = Object.values(country.currencies)
    .map((c) => c.name)
    .join(", ");
  const languages = Object.values(country.languages).join(", ");
  const borderCountries = country.borders?.map(
    (border) => borderCountryNames[border] || border
  );

  return (
    <main className="px-8 py-10 md:px-18.5 md:py-16 flex flex-col gap-10.5 md:gap-18 items-start">
      <Button shadow={true}>
        <MoveLeft />
        Back
      </Button>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 md:gap-28">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="w-full aspect-video object-cover"
        />

        <div>
          <h2 className="mb-6 text-2xl font-extrabold md:text-3xl">
            {country.name.common}
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <p>
                <strong>Native Name:</strong> {nativeName}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {country.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital?.join(", ")}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <strong>Top Level Domain:</strong> {country.tld?.join(", ")}
              </p>
              <p>
                <strong>Currencies:</strong> {currencies}
              </p>
              <p>
                <strong>Languages:</strong> {languages}
              </p>
            </div>
          </div>

          {borderCountries && borderCountries.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-8">
              <h3 className="font-semibold whitespace-nowrap">
                Border Countries:
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {borderCountries.map((border) => (
                  <span
                    key={border}
                    className="rounded-sm bg-white px-6 py-1 text-sm shadow-md dark:bg-dark-blue"
                  >
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default CountryDetail;
