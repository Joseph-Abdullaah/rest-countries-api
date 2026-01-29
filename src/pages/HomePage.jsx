import React, { useMemo } from "react";
import Header from "../layout/Header";
import Input from "../Components/ui/Input";
import Dropdown from "../Components/ui/Dropdown";
import CountryGrid from "../Components/countries/CountryGrid";
import CountryCard from "../Components/countries/CountryCard";
import Loader from "../Components/ui/Loader";
import { useCountries } from "../hooks/useCountries";
import useFilterStore from "../store/filterStore";

function HomePage() {
  const { data: countries, isLoading, error } = useCountries();
  const { searchQuery, selectedRegion, setSearchQuery, setSelectedRegion } =
    useFilterStore();

  const filtered = useMemo(() => {
    if (!countries) return [];
    return countries.filter((c) => {
      const matchesSearch = c.name.common
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion ? c.region === selectedRegion : true;
      return matchesSearch && matchesRegion;
    });
  }, [countries, searchQuery, selectedRegion]);

  return (
    <div className="min-h-screen bg-grey-50 dark:bg-blue-950 transition-colors duration-300">
      <Header />
      <main className="mx-auto max-w-screen-2xl px-4 md:px-16 py-8 md:py-12">
        {/* Controls */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between mb-10 md:mb-12">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Dropdown value={selectedRegion} onSelect={setSelectedRegion} />
        </div>

        {/* Content */}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p className="text-center text-grey-950 dark:text-white text-lg mt-20">
            Failed to load countries. Please try again.
          </p>
        ) : (
          <CountryGrid>
            {filtered.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </CountryGrid>
        )}
      </main>
    </div>
  );
}

export default HomePage;
