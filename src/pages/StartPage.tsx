import { Box } from "@chakra-ui/react";
import { Button } from "../components/Button";

const StartPage = () => {
  const handleClick = () => {
    console.log("handleClick");
  };

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
