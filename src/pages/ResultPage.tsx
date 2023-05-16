import { useSelector } from "react-redux";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { answerSelector, quizSelector } from "../redux/quizSlice";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const quiz = useSelector(quizSelector);
  const answers = useSelector(answerSelector);

  const navigate = useNavigate();
  const handleClick = () => navigate("/categories");

  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const wrongAnswers = answers.filter((answer) => !answer.isCorrect).length;
  return (
    <>
      <iframe src="https://embed.lottiefiles.com/animation/55867" />

      <Flex justifyContent="space-evenly">
        <Box className="result-box">
          {quiz.length}
          <Text>Question</Text>
        </Box>
        <Box className="result-box">
          {correctAnswers}
          <Text>Correct</Text>
        </Box>
        <Box className="result-box">
          {wrongAnswers}
          <Text>Incorrect</Text>
        </Box>
      </Flex>

      <Box className="center">
        <Button onClick={handleClick} className="result-btn">
          AGAIN
        </Button>
      </Box>
    </>
  );
};

export default ResultPage;
