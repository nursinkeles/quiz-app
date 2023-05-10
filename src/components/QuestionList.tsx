import { useState } from "react";
import { useSelector } from "react-redux";
import { quizSelector } from "../redux/quizSlice";
import { Text, Box, RadioGroup, Stack, Radio, Grid } from "@chakra-ui/react";
import { LeftArrowIcon } from "../assets/icon/LeftArrowIcon";
import { RightArrowIcon } from "../assets/icon/RightArrowIcon";

export const QuestionList = () => {
  const quiz = useSelector(quizSelector);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

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

  const handleCompleteQuiz = (): void => {
    console.log("complete");
  };

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === quiz.length - 1;

  return (
    <>
      {!isFirstQuestion && (
        <Box onClick={() => handleNextOrPreviousQuestion(-1)}>
          <LeftArrowIcon />
        </Box>
      )}
      {!isLastQuestion ? (
        <Box onClick={() => handleNextOrPreviousQuestion(1)}>
          <RightArrowIcon />
        </Box>
      ) : (
        <Text className="complete-btn" onClick={handleCompleteQuiz}>
          Complete
        </Text>
      )}

      <Text color="#a0d2eb" fontSize="xs">
        QUESTION {currentQuestionIndex + 1} OF {quiz.length}
      </Text>
      <Text color="#e5eaf5" fontSize="xs" mb="2">
        {quiz[currentQuestionIndex]?.question}
      </Text>

      <RadioGroup
        display={"flex"}
        justifyContent={"center"}
        onChange={(value) => setSelectedOption(value)}
        value={selectedOption}
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {options.map((option: string, index: number) => (
            <Stack
              key={index}
              className={`option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => setSelectedOption(option)}
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
