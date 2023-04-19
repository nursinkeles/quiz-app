import { CategoryList } from "../components/CategoryList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, selectCategory } from "../redux/categorySlice";
import { RootState, AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const categories = useSelector((state: RootState) => state.category.items);
  const status = useSelector((state: RootState) => state.category.status);
  const selectedCategoryId = useSelector(
    (state: RootState) => state.category.selectedCategoryId
  );
  const navigate = useNavigate();
  const findCategory = categories.find((c) => c.id === selectedCategoryId);
  localStorage.setItem("categoryName", JSON.stringify(findCategory));

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
