import { Box, Text } from "@chakra-ui/react";

interface Category {
  id: number;
  name: string;
}

interface CategoryListProps {
  categories: Category[];
}

export const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mt="3">
      {categories.map((category) => (
        <Box
          key={category.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mt="3"
        >
          <Text p="2">{category.name}</Text>
        </Box>
      ))}
    </Box>
  );
};
