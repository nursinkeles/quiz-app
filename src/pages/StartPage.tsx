import { Box } from "@chakra-ui/react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/categories");

  return (
    <Box>
      <h1 className="header">
        READY <br /> FOR A <br /> <span>QUIZ?</span>
      </h1>
      <Button text="START" onClick={handleClick} />
    </Box>
  );
};

export default StartPage;
