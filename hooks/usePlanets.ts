import { useQuery } from '@tanstack/react-query';
import { fetchPlanetById, fetchPlanets } from '../services/planetService';
import Planet from '@/types/Planet';

/**
 * Custom hook to fetch and cache the list of planets.
 *
 * @returns An object containing the status and result of the fetch operation.
 *
 * @example
 * const { data, error, isLoading } = usePlanets();
 */
export const usePlanets = () => {
  return useQuery<Planet[]>({
    queryKey: ['planets'],
    queryFn: fetchPlanets,
  });
};

/**
 * Fetch a planet by its id.
 *
 * @param id - The id of the planet to fetch.
 * @returns A hook that fetches the planet and returns the result.
 *
 * @example
 * const { data, error, isLoading } = usePlanetById('id-123');
 */
export const usePlanetById = (id: Planet['id']) => {
  return useQuery<Planet>({
    queryKey: ['planet', id],
    queryFn: () => fetchPlanetById(id),
    enabled: !!id,
  });
};