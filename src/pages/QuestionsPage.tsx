import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "../redux/quizSlice";
import { RootState, AppDispatch } from "../redux/store";
import { Loading } from "../components/Loading";

type QuestionsProps = {};
const QuestionsPage: React.FC<QuestionsProps> = () => {
  const quiz = useSelector((state: RootState) => state.quiz.items);
  const status = useSelector((state: RootState) => state.quiz.status);
  const error = useSelector((state: RootState) => state.quiz.error);
  const dispatch: AppDispatch = useDispatch();

  const selectedCategoryId = JSON.parse(
    localStorage.getItem("category") || "null"
  );

  useEffect(() => {
    selectedCategoryId !== undefined &&
      status === "idle" &&
      dispatch(
        fetchQuestions({
          amount: 10,
          difficulty: "hard",
          type: "multiple",
          category: selectedCategoryId,
        })
      );
  }, [dispatch, status, selectedCategoryId]);

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
