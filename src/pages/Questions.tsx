import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "../redux/quizSlice";
import { RootState ,AppDispatch} from '../redux/store';


 type QuestionsProps = {
 }
export const Questions:React.FC<QuestionsProps> = () => {
 
const quiz = useSelector((state: RootState) => state.quiz.items);
const status = useSelector((state: RootState) => state.quiz.status);
const error = useSelector((state: RootState) => state.quiz.error);
const dispatch: AppDispatch = useDispatch();
 
useEffect(() => {
  if (status === 'idle') {
    dispatch(fetchQuestions());
  }
}, [dispatch, status]);


  return (
  <div>
    <h1>Quiz App</h1>
      {status === "loading" && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {quiz.map((item, index) => (
          <li key={index}>{item.question}</li>
        ))}
      </ul>
  </div>
     
  );
};

