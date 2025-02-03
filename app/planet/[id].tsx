import { useLocalSearchParams } from "expo-router";
import { Card } from "@/components/ui/card";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { usePlanetById } from "@/hooks/usePlanets";
import { getPlanetImage } from "@/utilities/getPlanetImage";
import { Grid, GridItem } from "@/components/ui/grid";
import { Spinner } from "@/components/ui/spinner";
import { Alert, AlertText } from "@/components/ui/alert";
import Planet from "@/types/Planet";
import StoredImage from "@/components/StoredImage";
import ToggleFavorite from "@/components/ToggleFavorite";

const items: Partial<Record<keyof Planet, string>> = {
  numberMoons: "Moons",
  gravity: "Gravity",
  massValue: "Mass",
  density: "Density",
  volValue: "Volume",
  avgTemp: "Temperature"
};

/**
 * PlanetDetail component.
 *
 * This component fetches and displays detailed information about a planet
 * using its ID from the URL parameters. It handles loading and error states,
 * and displays the planet's image, name, and various attributes.
 *
 * @returns A component rendering the details of a planet, or a loading/error message.
 */
export default function PlanetDetail() {

  const { id } = useLocalSearchParams<{id: Planet['id']}>();
  const { data: planet, isLoading, error } = usePlanetById(id);

  if (isLoading){
    return <Box className="flex-1 items-center justify-center">
      <Spinner size="large" color={"primary"} />
    </Box>;
  }

  if (error){
    return <Box className="flex-1 items-center justify-center">
      <Alert action="error" variant="solid">
        <AlertText>Error loading planet details.</AlertText>
      </Alert>
    </Box>;
  }
  
  if (!planet){
    return <Box className="flex-1 items-center justify-center">
      <Alert action="warning" variant="solid">
        <AlertText>Planet not found.</AlertText>
      </Alert>
    </Box>;
  }

  return (<Box className="flex-1 p-4 gap-4">
    <Box className="items-center">
       <StoredImage
        id={planet.id}
        alt={planet.name}
        style={{width: 120, height: 120}}
        source={{uri: getPlanetImage(planet.id)}}
      />
      <Box className="absolute top-0 right-0">
        <ToggleFavorite planet={planet} />
      </Box>
    </Box>
    <Card className="items-center gap-4">
      <Heading size="5xl" >
        {planet.name}
      </Heading>
      <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi itaque sit fuga labore dolore? Nam error dignissimos ex quasi, quidem sunt ipsam quia odit quos? Culpa, soluta. Nulla, ullam totam.</Text>
      <Grid
        className="gap-y-2 gap-x-4"
        _extra={{ className: "grid-cols-6" }}
      >
        {Object.entries(items).map(([key, value]) => (
          <GridItem
            className="bg-background-50 p-4 rounded-md items-center"
            _extra={{ className: "col-span-3" }}
            key={key}
          >
            <Heading>{value}</Heading>
            <Text>{planet[key as keyof Planet]}</Text>
          </GridItem>
        ))}
      </Grid>
    </Card>
  </Box>);
}