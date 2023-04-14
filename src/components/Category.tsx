import { Box, Image, Text } from "@chakra-ui/react";
interface CategoryProps {
  category: {
    id: number;
    name: string;
  };
}
export const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      {/* <Image
        src={`https://picsum.photos/seed/${category.id}/200/200`}
        alt={category.name}
      /> */}
      <Text p="2">{category.name}</Text>
    </Box>
  );
};
