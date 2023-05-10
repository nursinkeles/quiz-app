import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory, categoryStatusSelector } from "../redux/categorySlice";
import { AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { useSelectedCategory } from "../hooks/useSelectedCategory";
import { CategoryList } from "../components/CategoryList";
import { fetchCategories } from "../services/api";
import { ApiStatus } from "../types/Type";

const CategoryPage = () => {
  const status = useSelector(categoryStatusSelector);
  const { categories } = useSelectedCategory();

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    status === ApiStatus.IDLE && dispatch(fetchCategories());
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
