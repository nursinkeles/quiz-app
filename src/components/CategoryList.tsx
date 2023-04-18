import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

interface Category {
  id: number;
  name: string;
}

interface CategoryListProps {
  categories: Category[];
  onCategoryClick: (categoryId: number) => void;
}

export const CategoryList = ({
  categories,
  onCategoryClick,
}: CategoryListProps) => {
  const handleCategoryClick = (categoryId: number) => {
    onCategoryClick(categoryId);
  };
  return (
    <Box className="category-list">
      {categories.map((category) => (
        <Box key={category.id} onClick={() => handleCategoryClick(category.id)}>
          <Text p="2">{category.name}</Text>
        </Box>
      ))}
    </Box>
  );
};
