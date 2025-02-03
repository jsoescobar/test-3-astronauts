import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { usePlanetsStore } from '@/store/usePlanetsStore';
import Planet from '@/types/Planet';
import EmptyComponent from '@/components/EmptyComponent';
import PlanetItem from '@/components/PlanetItem';
import Filters from '@/components/Filters';

/**
 * Component that displays a list of all planets with filtering capabilities.
 *
 * This component retrieves planets from the store and allows users to filter the list
 * by name using the `Filters` component. It uses a `FlatList` to render each planet
 * using the `PlanetItem` component and displays an `EmptyComponent` when there are
 * no planets to show.
 */
export default function AllPlanets() {
  
  const planets = usePlanetsStore((state) => state.planets);
  const [data, setData] = useState<Planet[]>(planets);

  const renderPlanetItem = useCallback(({ item }: { item: Planet }) => (
    <PlanetItem planet={item} />
  ), []);

  return (<>
    <Filters
      placeholder="Search planet by name"
      defaultList={planets}
      data={data}
      setData={setData}
    />
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderPlanetItem}
      ListEmptyComponent={<EmptyComponent title="No planets found" />}
    />
  </>);
};
