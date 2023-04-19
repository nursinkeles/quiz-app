import { Spinner } from "@chakra-ui/react";
export const Loading = () => {
  return (
    <div className="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#845bb3"
        size="lg"
      />
    </div>
  );
};
