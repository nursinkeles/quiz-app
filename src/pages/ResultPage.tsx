import { useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";
import { answerSelector, quizSelector } from "../redux/quizSlice";

const ResultPage = () => {
  const quiz = useSelector(quizSelector);
  const answers = useSelector(answerSelector);
  //hatalı soruları gözden geçirmeniz gerekenler olarak sınıflandır 5 sorudan fazlaysa veya azsa durumu kontrol edilsin
  const correctAnswers = answers.filter(
    (answer) => answer.isCorrect === true
  ).length;
  const wrongAnswers = answers.filter(
    (answer) => answer.isCorrect === false
  ).length;
  const emptyAnswers = quiz.length - answers.length;
  return (
    <div>
      <Text>Correct answers:{correctAnswers} </Text>
      <Text>Incorrect answers:{wrongAnswers}</Text>
      <Text>Empty answers: {emptyAnswers}</Text>
    </div>
  );
};

export default ResultPage;
