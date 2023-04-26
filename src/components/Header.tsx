import { CardHeader, Heading } from "@chakra-ui/react";
// import { LeftArrowIcon } from "../assets/icon/LeftArrowIcon";
// import { RightArrowIcon } from "../assets/icon/RightArrowIcon";
import { useCurrentRoute } from "../hooks/useCurrentRoute";

export const Header = () => {
  const currentRoute = useCurrentRoute();

  return (
    <>
      {currentRoute?.title && (
        <CardHeader>
          <Heading size="md" className="title">
            {currentRoute?.title}
          </Heading>

          {/* <LeftArrowIcon />
      <RightArrowIcon /> */}
        </CardHeader>
      )}
    </>
  );
};
