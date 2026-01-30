import React from "react";
import { useParams, useNavigate } from "react-router";
import Header from "../layout/Header";
import CountryDetail from "../Components/countries/CountryDetail";
import Loader from "../Components/ui/Loader";
import Button from "../Components/ui/Button";
import { useCountry } from "../hooks/useCountry";
import { MoveLeft } from "lucide-react";

function CountryDetailPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const { data: country, isLoading, error } = useCountry(code);

  return (
    <div className="min-h-screen bg-grey-50 dark:bg-blue-950 transition-colors duration-300">
      <Header />
      <main className="mx-auto max-w-screen-2xl">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div className="px-4 md:px-16 py-16 flex flex-col gap-8">
            <Button
              shadow
              onClick={() => navigate(-1)}
              className="w-fit px-8 py-2"
            >
              <MoveLeft size={18} />
              <span>Back</span>
            </Button>
            <p className="text-center text-grey-950 dark:text-white text-lg">
              Country not found.
            </p>
          </div>
        ) : country ? (
          <CountryDetail country={country} />
        ) : null}
      </main>
    </div>
  );
}

export default CountryDetailPage;
