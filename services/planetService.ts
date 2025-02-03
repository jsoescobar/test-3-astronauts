import axios from 'axios';
import Planet from '@/types/Planet';
import { PlanetDTO } from '@/services/dto/PlanetDTO';

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

/**
 * Fetches all planets from the solar system API.
 *
 * @returns A promise that resolves to an array of Planet objects.
 */
export const fetchPlanets = async () => {
  const response = await axios.get(`${BASE_URL}?filter[]=isPlanet,eq,true&order=englishName,asc`);
  return response.data.bodies.map((data: PlanetDTO) => new PlanetDTO(data).toPlanet());
};

/**
 * Fetch a planet by its ID.
 *
 * @param id - The ID of the planet to fetch.
 * @returns A promise that resolves to the fetched planet.
 */
export const fetchPlanetById = async (id: Planet['id']): Promise<Planet> => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return new PlanetDTO(response.data).toPlanet();
};