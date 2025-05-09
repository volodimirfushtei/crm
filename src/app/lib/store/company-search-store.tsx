// lib/store/companySearchStore.ts

import { create } from 'zustand';

interface CompanySearchStore {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useCompanySearchStore = create<CompanySearchStore>((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
