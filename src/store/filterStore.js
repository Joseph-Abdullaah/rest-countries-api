import { create } from "zustand";

const useFilterStore = create((set) => ({
  searchQuery: "",
  selectedRegion: "",

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedRegion: (region) => set({ selectedRegion: region }),
  clearFilters: () => set({ searchQuery: "", selectedRegion: "" }),
}));

export default useFilterStore;
