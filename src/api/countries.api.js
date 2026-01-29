import { API_BASE } from "./client";

// Fetch all countries (list page)
export const fetchCountries = async () => {
  const res = await fetch(
    `${API_BASE}/all?fields=name,capital,region,population,flags,cca3`
  );

  if (!res.ok) throw new Error("Failed to fetch countries");

  return res.json();
};

// Fetch single country (details page)
export const fetchCountryByCode = async (code) => {
  const res = await fetch(`${API_BASE}/alpha/${code}`);

  if (!res.ok) throw new Error("Failed to fetch country");

  const data = await res.json();
  return data[0];
};