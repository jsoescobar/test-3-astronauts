import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Card } from "./ui/card";
import { Box } from "./ui/box";
import StoredImage from "./StoredImage";
import { getPlanetImage } from "@/utilities/getPlanetImage";
import { Heading } from "./ui/heading";
import ToggleFavorite from "./ToggleFavorite";
import { Text } from "./ui/text";
import { Badge, BadgeText } from "./ui/badge";
import Planet from "@/types/Planet";

interface PlanetItemProps {
  planet: Planet
};

/**
 * PlanetItem component.
 *
 * @param {Planet} planet - The planet object that should be rendered.
 *
 * @returns {JSX.Element} The rendered PlanetItem component.
 */
const PlanetItem = ({ planet }: PlanetItemProps) => {

  const onShowMoreDetails = (planet: any) => {
    router.push(`/planet/${planet.id}`, { relativeToDirectory: true })
  }

  return (
    <TouchableOpacity onPress={() => onShowMoreDetails(planet)}>

      <Card size="md" variant="elevated" className="m-4 mt-0 flex flex-row gap-4 items-center">
        <Box>
          <StoredImage
            alt={planet.name}
            style={{width: 60, height: 60}}
            source={{uri: getPlanetImage(planet.id)}}
          />
        </Box>
        <Box className='flex-1 flex justify-between gap-2'>
          <Box className='flex flex-row justify-between'>
            <Heading size="xl">{planet.name}</Heading>
            <ToggleFavorite planet={planet} />
          </Box>
          <Box>
            <Text numberOfLines={1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laudantium neque, illo in facilis inventore debitis! Ad, voluptatum incidunt, eos, saepe commodi eius eaque doloremque quasi sit eum laboriosam pariatur?
            </Text>
          </Box>
          <Box className='flex flex-row w-full justify-between'>
            <Badge size='sm'>
              <BadgeText>Moons: {planet.numberMoons}</BadgeText>
            </Badge>
            <Badge size='sm'>
              <BadgeText>Gravity: {planet.gravity}</BadgeText>
            </Badge>
            <Badge size='sm'>
              <BadgeText>Mass: {planet.massValue}</BadgeText>
            </Badge>
          </Box>
        </Box>
      </Card>
    </TouchableOpacity>
  )
}

export default PlanetItem;