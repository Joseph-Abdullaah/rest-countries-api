import { useQuery } from "@tanstack/react-query";
import { fetchCountryByCode } from "../api/countries.api";

export const useCountry = (code) => {
    return useQuery({
        queryKey: ["Country", code],
        queryFn: () => fetchCountryByCode(code),
        staleTime: Infinity
    })  
}