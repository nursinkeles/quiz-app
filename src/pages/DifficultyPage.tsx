import { DIFFICULTY } from "../constants/Constant";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectDifficulty } from "../redux/categorySlice";
import { AppDispatch } from "../redux/store";

const DifficultyPage = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleDifficultyClick = (e: any) => {
    dispatch(selectDifficulty(e.target.innerText));
    navigate("/info");
  };
  return (
    <Box className="list-items">
      {DIFFICULTY.map((item, index) => (
        <Box key={index} onClick={(e) => handleDifficultyClick(e)}>
          <Text p="2">{item}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default DifficultyPage;
