import { useFavoritePlanetsStore } from "@/store/useFavoritePlanetsStore";
import Planet from "@/types/Planet";
import { MaterialIcons } from "@expo/vector-icons";
import { memo, useMemo } from "react";
import { TouchableOpacity } from "react-native";

interface ToggleFavoriteProps {
  planet: Planet;
}

/**
 * A button to toggle a planet as a favorite.
 *
 * @param planet The planet to toggle as a favorite.
 *
 * @returns A MaterialIcons component with the "favorite" or "favorite-outline"
 *          icon, depending on whether the planet is already a favorite.
 *          The icon is red if the planet is a favorite, otherwise it is black.
 */
const ToggleFavorite = ({planet}: ToggleFavoriteProps) => {

  const { favoritePlanets, setFavoritePlanets } = useFavoritePlanetsStore();
  
  const isFavoritePlanet = useMemo(() =>
    favoritePlanets.some(p => p.id === planet.id)
  , [favoritePlanets, planet]);

  const onAddFavorite = (planet: Planet) => {
    setFavoritePlanets(planet);
  };

  return (
    <TouchableOpacity onPress={()=>onAddFavorite(planet)}>
      <MaterialIcons
        size={32}
        color={isFavoritePlanet ? "red" : "black"}
        name={isFavoritePlanet ? "favorite" : "favorite-outline"}
      />
    </TouchableOpacity>
  );
};

export default memo(ToggleFavorite);