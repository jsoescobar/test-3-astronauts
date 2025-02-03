import { FontAwesome } from "@expo/vector-icons";
import { Box } from "./ui/box";
import { Input, InputField, InputIcon, InputSlot } from "./ui/input";
import { Button, ButtonIcon } from "./ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { SortBy, sortPlanets } from "@/utilities/sortPlanets";
import Planet from "@/types/Planet";

interface FiltersProps {
  placeholder: string;
  defaultList: Planet[];
  data: Planet[];
  setData: Dispatch<SetStateAction<Planet[]>>;
};

/**
 * A component to filter and sort a list of planets.
 *
 * @prop {string} placeholder The placeholder text for the search input.
 * @prop {Planet[]} defaultList The default list of planets to filter and sort.
 * @prop {Planet[]} data The current list of planets to filter and sort.
 * @prop {Dispatch<SetStateAction<Planet[]>>} setData The function to update the list of planets.
 *
 * @returns A component with a search input and sort button.
 */
const Filters = ({ placeholder, defaultList, data, setData }: FiltersProps) => {

  const [sortBy, setSortBy] = useState<SortBy>('asc');
  const [searchText, setSearchText] = useState('');
  
  const onSort = (order: 'asc' | 'desc') => {
    setSortBy(order);
    const sortedPlanetsAsc = sortPlanets(data, order);
    setData([...sortedPlanetsAsc]);
  }

  const onSearch = (text: string) => {
    setSearchText(text);
    const filteredPlanets = defaultList?.filter((planet) =>
      planet.name.toLowerCase().includes(text.toLowerCase())
    ) || [];
    const sortedPlanetsAsc = sortPlanets(filteredPlanets, sortBy);
    setData(sortedPlanetsAsc);
  };
  
  return (
    <Box className='w-full p-4'>
      <Box className='flex-row w-full bg-white p-4 items-center gap-4'>
        <Input className='flex-1' variant='outline' size='xl'>
          <InputSlot className="pl-3">
            <InputIcon as={()=> <FontAwesome name="search" size={24} color="black" />} />
          </InputSlot>
          <InputField
            placeholder={placeholder}
            value={searchText}
            onChangeText={onSearch}
          />
        </Input>
        <Button size="lg" onPress={() => onSort(sortBy === "asc" ? "desc" : "asc")}>
          <ButtonIcon as={()=> <FontAwesome name={ sortBy === "asc" ? "sort-alpha-asc" : "sort-alpha-desc"} size={16} color="white" />} />
        </Button>
      </Box>
    </Box>
  );
};

export default Filters;