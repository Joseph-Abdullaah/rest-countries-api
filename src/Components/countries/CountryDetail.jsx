import React from "react";
import { useNavigate, Link } from "react-router";
import { MoveLeft } from "lucide-react";
import Button from "../ui/Button";

function CountryDetail({ country }) {
  const navigate = useNavigate();

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  const nativeName = name.nativeName
    ? Object.values(name.nativeName)[0]?.common
    : name.common;

  const currencyList = currencies
    ? Object.values(currencies)
        .map((c) => c.name)
        .join(", ")
    : "N/A";

  const languageList = languages ? Object.values(languages).join(", ") : "N/A";

  return (
    <div className="px-4 md:px-16 py-10 md:py-16 flex flex-col gap-16">
      <Button shadow onClick={() => navigate(-1)} className="w-fit px-8 py-2">
        <MoveLeft size={18} />
        <span>Back</span>
      </Button>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-28 items-center">
        {/* Flag */}
        <img
          src={flags.svg}
          alt={flags.alt || `Flag of ${name.common}`}
          className="w-full aspect-video object-cover shadow-md"
        />

        {/* Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-grey-950 dark:text-white">
            {name.common}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-sm">
            {/* Left column */}
            <div className="flex flex-col gap-2 text-grey-950 dark:text-white">
              <p>
                <span className="font-semibold">Native Name: </span>
                {nativeName}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {population?.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {subregion || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {capital?.join(", ") || "N/A"}
              </p>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-2 text-grey-950 dark:text-white">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {tld?.join(", ") || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                {currencyList}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {languageList}
              </p>
            </div>
          </div>

          {/* Border Countries */}
          {borders && borders.length > 0 && (
            <div className="flex flex-wrap items-start gap-4">
              <h3 className="font-semibold text-sm text-grey-950 dark:text-white whitespace-nowrap pt-1">
                Border Countries:
              </h3>
              <div className="flex flex-wrap gap-2">
                {borders.map((code) => (
                  <Link
                    key={code}
                    to={`/country/${code}`}
                    className="px-6 py-1 text-xs shadow-md rounded-sm bg-white dark:bg-blue-900 text-grey-950 dark:text-white hover:shadow-lg transition-shadow duration-200"
                  >
                    {code}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
