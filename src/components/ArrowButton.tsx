import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { ArrowButtonProps } from "../types/Type";

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
}) => {
  const icon =
    direction === "left" ? (
      <ArrowLeftIcon className="arrow-icon" left="6" />
    ) : (
      <ArrowRightIcon className="arrow-icon" right="6" />
    );

  return <Box onClick={onClick}>{icon}</Box>;
};
