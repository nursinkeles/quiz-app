import { DIFFICULTY } from "../constants/Constant";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const DifficultyPage = () => {
  const navigate = useNavigate();

  const handleDifficultyClick = (e: any) => {
    localStorage.setItem("difficulty", JSON.stringify(e.target.innerText));
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
