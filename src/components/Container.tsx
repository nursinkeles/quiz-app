import { Body } from "./Body";
import { Card, Flex } from "@chakra-ui/react";
import { Error } from "./Error";
import { Header } from "./Header";
import { Loading } from "./Loading";
import { useCurrentRoute } from "../hooks/useCurrentRoute";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  categoryErrorSelector,
  categoryStatusSelector,
} from "../redux/categorySlice";
import { quizErrorSelector, quizStatusSelector } from "../redux/quizSlice";
import { ApiStatus } from "../types/Type";

export const Container = () => {
  const currentRoute = useCurrentRoute();
  const categoryStatus = useSelector(categoryStatusSelector);
  const categoryError = useSelector(categoryErrorSelector);
  const quizStatus = useSelector(quizStatusSelector);
  const quizError = useSelector(quizErrorSelector);
  const isCategoryLoading = useMemo(
    () => categoryStatus === ApiStatus.LOADING,
    [categoryStatus]
  );
  const isQuizLoading = useMemo(
    () => quizStatus === ApiStatus.LOADING,
    [quizStatus]
  );
  const isCategoryOrQuizLoading = isCategoryLoading || isQuizLoading;
  const isCategoryFailed = useMemo(
    () => categoryStatus === ApiStatus.FAILED,
    [categoryStatus]
  );
  const isQuizFailed = useMemo(
    () => quizStatus === ApiStatus.LOADING,
    [quizStatus]
  );
  const isCategoryOrQuizFailed = isCategoryFailed || isQuizFailed;
  const error = isCategoryOrQuizFailed ? categoryError || quizError : "";
  return (
    <Flex alignItems="center" justifyContent="center" h="100vh">
      {currentRoute?.class && (
        <Card w="50%" h="500px" maxW="sm" className={currentRoute?.class}>
          {isCategoryOrQuizLoading && <Loading />}
          {!isCategoryOrQuizLoading && !isCategoryOrQuizFailed && (
            <>
              <Header />
              <Body />
            </>
          )}
          {isCategoryOrQuizFailed && <Error text={error} />}
        </Card>
      )}
    </Flex>
  );
};
