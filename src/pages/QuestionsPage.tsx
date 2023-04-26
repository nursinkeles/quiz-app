import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchQuestions,
  quizSelector,
  statusSelector,
  errorSelector,
} from "../redux/quizSlice";
import { AppDispatch } from "../redux/store";
import { Loading } from "../components/Loading";
import { useSelectedCategory } from "../hooks/useSelectedCategory";

const QuestionsPage = () => {
  const quiz = useSelector(quizSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  const { selectedDifficulty, selectedCategoryId } = useSelectedCategory();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    selectedCategoryId !== undefined &&
      selectedDifficulty !== undefined &&
      status === "idle" &&
      dispatch(
        fetchQuestions({
          amount: 10,
          difficulty: selectedDifficulty.toLowerCase(),
          type: "multiple",
          category: selectedCategoryId,
        })
      );
  }, [dispatch, status, selectedCategoryId, selectedDifficulty]);

  return (
    <div>
      {status === "loading" && <Loading />}
      {error && <p>Error: {error}</p>}
      <ul>
        {quiz.map((item, index) => (
          <li key={index}>{item.question}</li>
        ))}
      </ul>
    </div>
  );
};
export default QuestionsPage;
