import Planet from "@/types/Planet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";

interface FavoritePlanetsState {
  favoritePlanets: Planet[];
  setFavoritePlanets: (newPlanet: Planet) => void;
}

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await AsyncStorage.getItem(name)) || null
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await AsyncStorage.setItem(name, value)
  },
  removeItem: async (name: string): Promise<void> => {
    await AsyncStorage.removeItem(name)
  },
}

export const useFavoritePlanetsStore = create(
  persist<FavoritePlanetsState>( (set) => ({
      favoritePlanets: [],
      setFavoritePlanets: (newPlanet: Planet) => {
        set((state) => {
          const planetExists = state.favoritePlanets.some(
            (planet) => planet.id === newPlanet.id
          );

          return {
            favoritePlanets: planetExists
              ? state.favoritePlanets.filter((planet) => planet.id !== newPlanet.id)
              : [...state.favoritePlanets, newPlanet],
          };
        });
      },
    }),
    {
      name: "favorite-planets-storage",
      storage: createJSONStorage(() => storage),
    },
  ),
);
