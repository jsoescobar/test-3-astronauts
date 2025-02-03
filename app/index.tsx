
import { Alert, AlertText } from '@/components/ui/alert';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { usePlanets } from '@/hooks/usePlanets';
import { usePlanetsStore } from '@/store/usePlanetsStore';
import { Redirect } from 'expo-router';
import { useEffect } from 'react';

/**
 * The entry point of the app, responsible for fetching and displaying the list of planets.
 *
 * This component fetches the list of planets and stores it in the `planets` store.
 * If the fetch fails, it renders an error message and a button to retry the fetch.
 * If the fetch is successful, it redirects to the list of planets.
 */
export default function Index() {

  const { data, isLoading, error, refetch } = usePlanets();
  const setPlanets = usePlanetsStore((state) => state.setPlanets );
  
  useEffect(() => {
    if (!data) return;
    setPlanets(data || []);
  }, [setPlanets, data]);

  if (isLoading){
    return <Box className="flex-1 items-center justify-center gap-4">
      <Spinner size="large" color={"primary"} />
      <Text bold>Loading planets</Text>
    </Box>;
  }

  if (error){
    return <Box className="flex-1 items-center justify-center gap-4">
      <Alert action="error" variant="solid">
        <AlertText>Error loading planets</AlertText>
      </Alert>
      <Button onPress={refetch} variant='outline' action='positive' >
        <ButtonText>Try again</ButtonText>
      </Button>
    </Box>;
  }

  return <Redirect href="/(tabs)" relativeToDirectory  />

}