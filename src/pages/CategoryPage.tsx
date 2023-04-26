import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  selectCategory,
  statusSelector,
} from "../redux/categorySlice";
import { AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { useSelectedCategory } from "../hooks/useSelectedCategory";
import { CategoryList } from "../components/CategoryList";

const CategoryPage = () => {
  const status = useSelector(statusSelector);
  const { categories } = useSelectedCategory();

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    status === "idle" && dispatch(fetchCategories());
  }, [dispatch, status]);

  const handleCategoryClick = (categoryId: number) => {
    dispatch(selectCategory(categoryId));
    navigate("/difficulty");
  };

  return (
    <CategoryList
      categories={categories}
      onCategoryClick={handleCategoryClick}
    />
  );
};

export default CategoryPage;
