import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useFavoritePlanetsStore } from '@/store/useFavoritePlanetsStore';
import Planet from '@/types/Planet';
import EmptyComponent from '@/components/EmptyComponent';
import PlanetItem from '@/components/PlanetItem';
import Filters from '@/components/Filters';

/**
 * Tab component to display the list of favorite planets.
 *
 * The component fetches the list of favorite planets from the store and renders
 * a FlatList with the list of planets. It also renders a Filters component to
 * allow the user to search for a specific planet by name.
 *
 * @returns A JSX element containing a Filters component and a FlatList of
 *          PlanetItem components.
 */
export default function Favorites() {

  const {favoritePlanets} = useFavoritePlanetsStore();
  const [data, setData] = useState<Planet[]>([]);
 
  useEffect(() => {
    setData(favoritePlanets);
  }, [favoritePlanets]);

  const renderPlanetItem = useCallback(({ item }: { item: Planet }) => (
    <PlanetItem planet={item} />
  ), []);

  return (<>
    <Filters
      defaultList={favoritePlanets}
      data={data}
      setData={setData}
    />
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderPlanetItem}
      ListEmptyComponent={<EmptyComponent title="No favorite planets found" />}
    />
  </>);
};
