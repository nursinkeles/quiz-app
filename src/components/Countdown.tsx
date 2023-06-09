import { useEffect, useState } from "react";
import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { CountdownProps } from "../types/Type";

export const Countdown = ({ setIsTimeUp }: CountdownProps) => {
  const [remainingTime, setRemainingTime] = useState(120);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((time) => time - 1);
    }, 1000);
    if (remainingTime === 0) {
      clearInterval(intervalId);
      setIsTimeUp(true);
    }
    return () => clearInterval(intervalId);
  }, [remainingTime]);

  const progress = ((120 - remainingTime) / 120) * 100;

  return (
    <Box className="center">
      <CircularProgress
        margin={"0 auto"}
        value={progress}
        color="#845bb3"
        size="70px"
        thickness="7px"
        capIsRound
      >
        <CircularProgressLabel color="#845bb3">
          {`${Math.floor(remainingTime / 60)
            .toString()
            .padStart(2, "0")}:${(remainingTime % 60)
            .toString()
            .padStart(2, "0")}`}
        </CircularProgressLabel>
      </CircularProgress>
    </Box>
  );
};
