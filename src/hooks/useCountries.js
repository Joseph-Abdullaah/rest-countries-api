import { useQuery } from "@tanstack/react-query"
import { fetchCountries } from "../api/countries.api"

export const useCountries = () => {
    return useQuery({
        queryKey: ["Countries"],
        queryFn: fetchCountries,
        staleTime: Infinity
    })
}