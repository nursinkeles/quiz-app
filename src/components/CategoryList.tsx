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
    <Box className="category-list">
      {categories.map((category) => (
        <Box key={category.id}>
          <Text p="2">{category.name}</Text>
        </Box>
      ))}
    </Box>
  );
};
