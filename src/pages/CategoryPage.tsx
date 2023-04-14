import { CategoryList } from "../components/CategoryList";

const CategoryPage = () => {
  const categories = [
    { id: 1, name: "Elektronik" },
    { id: 2, name: "Kitap" },
    { id: 3, name: "Müzik" },
    { id: 4, name: "Oyuncak" },
    { id: 5, name: "Ev ve Bahçe" },
  ];
  return <CategoryList categories={categories} />;
};

export default CategoryPage;
