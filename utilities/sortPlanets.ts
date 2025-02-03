import Planet from "@/types/Planet";

export type SortBy = 'asc' | 'desc';

/**
 * Sorts an array of Planet objects alphabetically
 * @param {Planet[]} planets - The array of Planet objects
 * @param {SortBy} order - The sort order, either 'asc' or 'desc'
 * @returns {Planet[]} The sorted array of Planet objects
 */
export const sortPlanets = (planets: Planet[], order: SortBy): Planet[] => {
    return planets.sort((a, b) => {
      if (order === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  };