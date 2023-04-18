import { Card, Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Body } from "./Body";
import { Loading } from "./Loading";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export const Container = () => {
  const status = useSelector((state: RootState) => state.category.status);

  return (
    <Flex alignItems="center" justifyContent="center" h="100vh">
      <Card
        w="50%"
        h="500px"
        maxW="sm"
        className={window.location.pathname === "/" ? "gradient" : "card"}
      >
        {status === "loading" && <Loading />}
        {status !== "loading" && (
          <>
            <Header />
            <Body />
          </>
        )}
      </Card>
    </Flex>
  );
};
