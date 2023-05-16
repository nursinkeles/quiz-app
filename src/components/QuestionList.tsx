import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { quizSelector, answerSelector, setAnswers } from "../redux/quizSlice";
import {
  Text,
  RadioGroup,
  Stack,
  Radio,
  Grid,
  Flex,
  Box,
} from "@chakra-ui/react";
import { ArrowButton } from "./ArrowButton";

export const QuestionList = () => {
  const quiz = useSelector(quizSelector);
  const answers = useSelector(answerSelector);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const options = quiz[currentQuestionIndex]?.options || [];

  const handleNextOrPreviousQuestion = (index: number) => {
    if (
      currentQuestionIndex + index >= 0 &&
      currentQuestionIndex + index < quiz.length
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + index);
      setSelectedOption("");
    }
  };

  const handleAnswerSelected = (value: string) => {
    const isCorrect = value === quiz[currentQuestionIndex]?.correct_answer;
    const answer = { answer: value, isCorrect };

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;

    dispatch(setAnswers(newAnswers));
    setSelectedOption(value);
  };

  const handleCompleteQuiz = () => navigate("/result");

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === quiz.length - 1;

  return (
    <>
      {!isFirstQuestion && (
        <ArrowButton
          direction="left"
          onClick={() => handleNextOrPreviousQuestion(-1)}
        />
      )}
      {!isLastQuestion ? (
        <ArrowButton
          direction="right"
          onClick={() => handleNextOrPreviousQuestion(1)}
        />
      ) : (
        <Text className="complete-btn" onClick={handleCompleteQuiz}>
          Complete
        </Text>
      )}

      <Flex justifyContent="center" gap="2">
        {quiz.map((item: string, index: number) => (
          <Box
            key={index}
            className="box"
            bg={index <= currentQuestionIndex ? "#845bb3" : "#d0bdf4"}
          />
        ))}
      </Flex>

      <Text color="#a0d2eb" fontSize="xs">
        QUESTION {currentQuestionIndex + 1} OF {quiz.length}
      </Text>
      <Text color="#e5eaf5" fontSize="xs" mb="2">
        {quiz[currentQuestionIndex]?.question}
      </Text>

      <RadioGroup
        display={"flex"}
        justifyContent={"center"}
        onChange={(value) => handleAnswerSelected(value)}
        value={selectedOption}
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {options.map((option: string, index: number) => (
            <Stack
              key={index}
              className={`option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleAnswerSelected(option)}
            >
              <Radio value={option} _checked={{ bg: "#845bb3" }}>
                <Text className="text">{option}</Text>
              </Radio>
            </Stack>
          ))}
        </Grid>
      </RadioGroup>
    </>
  );
};
