import { Box, Text } from "@chakra-ui/react";
import { CategoryListProps } from "../types/Type";

export const CategoryList = ({
  categories,
  onCategoryClick,
}: CategoryListProps) => {
  const handleCategoryClick = (categoryId: number) => {
    onCategoryClick(categoryId);
  };
  return (
    <Box className="list-items">
      {categories.map((category) => (
        <Box key={category.id} onClick={() => handleCategoryClick(category.id)}>
          <Text p="2">{category.name}</Text>
        </Box>
      ))}
    </Box>
  );
};
