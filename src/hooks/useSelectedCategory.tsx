import { useSelector } from "react-redux";
import {
  categoriesSelector,
  selectedCategorySelector,
  selectedDifficultySelector,
} from "../redux/categorySlice";

export const useSelectedCategory = () => {
  const categories = useSelector(categoriesSelector);
  const selectedCategoryId = useSelector(selectedCategorySelector);
  const selectedCategoryName = categories.find(
    (c) => c.id === selectedCategoryId
  );
  const selectedDifficulty = useSelector(selectedDifficultySelector);

  return {
    categories,
    selectedCategoryName,
    selectedDifficulty,
    selectedCategoryId,
  };
};
