import { Card, Flex } from "@chakra-ui/react";
import { CategoryList } from "./CategoryList";
import { Header } from "./Header";

export const Container = () => {
  const categories = [
    { id: 1, name: "Elektronik" },
    { id: 2, name: "Kitap" },
    { id: 3, name: "Müzik" },
    { id: 4, name: "Oyuncak" },
    { id: 5, name: "Ev ve Bahçe" },
  ];

  return (
    <Flex alignItems="center" justifyContent="center">
      <Card w="50%" h="500px" maxW="sm" className="card">
        <Header />
        <CategoryList categories={categories} />
      </Card>
    </Flex>
  );
};
