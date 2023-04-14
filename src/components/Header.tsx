import { CardHeader, Heading } from "@chakra-ui/react";
import { LeftArrowIcon } from "../assets/icon/LeftArrowIcon";
import { RightArrowIcon } from "../assets/icon/RightArrowIcon";
export const Header = () => {
  return (
    <CardHeader>
      <Heading size="md" textAlign="center">
        Choose Category
      </Heading>
      <LeftArrowIcon />
      <RightArrowIcon />
    </CardHeader>
  );
};
