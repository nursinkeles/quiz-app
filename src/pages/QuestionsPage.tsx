import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quizSelector, quizStatusSelector } from "../redux/quizSlice";
import { AppDispatch } from "../redux/store";
import { useSelectedCategory } from "../hooks/useSelectedCategory";
import { fetchQuestions } from "../api/api";
import { ApiStatus } from "../types/Type";

const QuestionsPage = () => {
  const quiz = useSelector(quizSelector);
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
    <div>
      <ul>
        {quiz.map((item, index) => (
          <li key={index}>{item.question}</li>
        ))}
      </ul>
    </div>
  );
};
export default QuestionsPage;
