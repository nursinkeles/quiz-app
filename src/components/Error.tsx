import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";
import { ErrorProps } from "../types/Type";

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
