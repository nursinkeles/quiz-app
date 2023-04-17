import { Card, Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Body } from "./Body";

export const Container = () => {
  return (
    <Flex alignItems="center" justifyContent="center" h="100vh">
      <Card
        w="50%"
        h="500px"
        maxW="sm"
        className={window.location.pathname === "/" ? "gradient" : "card"}
      >
        <Header />
        <Body />
      </Card>
    </Flex>
  );
};
