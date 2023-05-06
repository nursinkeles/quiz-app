import { MouseEvent } from "react";
import { DIFFICULTY } from "../constants/Constant";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectDifficulty } from "../redux/categorySlice";
import { AppDispatch } from "../redux/store";

const DifficultyPage = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleDifficultyClick = (e: MouseEvent<HTMLDivElement>) => {
    const buttonText = (e.target as HTMLDivElement).innerText;
    dispatch(selectDifficulty(buttonText));
    navigate("/info");
  };
  return (
    <Box className="list-items">
      {DIFFICULTY.map((item: string, index: number) => (
        <Box key={index} onClick={handleDifficultyClick}>
          <Text p="2">{item}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default DifficultyPage;
