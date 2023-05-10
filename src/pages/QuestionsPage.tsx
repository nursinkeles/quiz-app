import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quizStatusSelector } from "../redux/quizSlice";
import { AppDispatch } from "../redux/store";
import { useSelectedCategory } from "../hooks/useSelectedCategory";
import { fetchQuestions } from "../services/api";
import { ApiStatus } from "../types/Type";
import { QuestionHeader } from "../components/Header";
import { Countdown } from "../components/Countdown";
import { QuestionList } from "../components/QuestionList";

const QuestionsPage = () => {
  const quizStatus = useSelector(quizStatusSelector);
  const { selectedDifficulty, selectedCategoryId } = useSelectedCategory();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    selectedCategoryId !== undefined &&
      selectedDifficulty !== undefined &&
      quizStatus === ApiStatus.IDLE &&
      dispatch(
        fetchQuestions({
          amount: 10,
          difficulty: selectedDifficulty.toLowerCase(),
          type: "multiple",
          category: selectedCategoryId,
        })
      );
  }, [dispatch, quizStatus, selectedCategoryId, selectedDifficulty]);

  return (
    <>
      <QuestionHeader />
      <Countdown />
      <QuestionList />
    </>
  );
};
export default QuestionsPage;
