import { CardHeader, Heading } from "@chakra-ui/react";
import { FindRoute } from "../constants/Constant";

// import { LeftArrowIcon } from "../assets/icon/LeftArrowIcon";
// import { RightArrowIcon } from "../assets/icon/RightArrowIcon";
export const Header = () => {
  return (
    <CardHeader>
      <Heading size="md" className="title">
        {FindRoute?.title}
      </Heading>
      {/* <LeftArrowIcon />
      <RightArrowIcon /> */}
    </CardHeader>
  );
};
