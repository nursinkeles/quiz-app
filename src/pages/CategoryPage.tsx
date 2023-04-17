import { useState } from "react";
import { CategoryList } from "../components/CategoryList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../redux/categorySlice";
import { RootState, AppDispatch } from "../redux/store";

const CategoryPage = () => {
  // const [selectedCategoryId, setSelectedCategoryId] = useState<number>();

  // const handleCategoryChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   setSelectedCategoryId(parseInt(event.target.value));
  // };

  const categories = useSelector((state: RootState) => state.category.items);
  const status = useSelector((state: RootState) => state.quiz.status);

  const dispatch: AppDispatch = useDispatch();

  console.log("category", categories);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  return <CategoryList categories={categories} />;
};

export default CategoryPage;
