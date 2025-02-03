import Planet from '@/types/Planet';
import { create } from 'zustand';

interface PlanetsState {
  planets: Planet[];
  setPlanets: (planets: Planet[]) => void;
}

export const usePlanetsStore = create<PlanetsState>((set) => ({
  planets: [],
  setPlanets: (planets) => set({ planets }),
}));
