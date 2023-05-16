import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quizStatusSelector } from "../redux/quizSlice";
import { AppDispatch } from "../redux/store";
import { useSelectedCategory } from "../hooks/useSelectedCategory";
import { fetchQuestions } from "../services/api";
import { ApiStatus, QuestionHeaderItem } from "../types/Type";
import { QuestionHeader } from "../components/Header";
import { Countdown } from "../components/Countdown";
import { QuestionList } from "../components/QuestionList";
import { TimeOutError } from "../components/Error";

const QuestionsPage = () => {
  const [isTimeUp, setIsTimeUp] = useState(false);

  const quizStatus = useSelector(quizStatusSelector);
  const { selectedDifficulty, selectedCategoryId, selectedCategoryName } =
    useSelectedCategory();
  const dispatch: AppDispatch = useDispatch();

  const object: QuestionHeaderItem[] = [
    { title: "Category", value: selectedCategoryName?.name },
    { title: "Difficulty", value: selectedDifficulty },
  ];

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
      {isTimeUp ? (
        <TimeOutError />
      ) : (
        <>
          <QuestionHeader object={object} />
          <Countdown setIsTimeUp={setIsTimeUp} />
          <QuestionList />
        </>
      )}
    </>
  );
};
export default QuestionsPage;
