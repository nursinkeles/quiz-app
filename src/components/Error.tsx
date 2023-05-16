import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/react";
import { ErrorProps } from "../types/Type";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const Error = ({ text }: ErrorProps) => {
  return (
    <div>
      <Alert status="error" variant="solid">
        <AlertIcon />
        <AlertDescription ml={4}>{text}</AlertDescription>
      </Alert>
    </div>
  );
};

export const TimeOutError = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/categories");

  return (
    <>
      <Alert
        status="error"
        variant="solid"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <iframe src="https://embed.lottiefiles.com/animation/137725" />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Time Out!
        </AlertTitle>
      </Alert>
      <Button text="AGAIN" onClick={handleClick} />
    </>
  );
};
