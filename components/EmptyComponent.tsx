import { Entypo } from "@expo/vector-icons";
import { Box } from "./ui/box";
import { Text } from "./ui/text";

interface EmptyComponentProps {
  title: string;
};

/**
 * A component that displays a sad face emoji and a given title when no items
 * are available in a list.
 *
 * @param {EmptyComponentProps} props
 * @prop {string} title - The title to display next to the sad face emoji.
 * @returns {React.ReactElement}
 */
const EmptyComponent = ({ title }: EmptyComponentProps) => {
  return (
    <Box className="p-4 items-center flex flex-col gap-4">
      <Entypo name="emoji-sad" size={32} color="black" />
      <Text>{title}</Text>
    </Box>
  );
};

export default EmptyComponent;