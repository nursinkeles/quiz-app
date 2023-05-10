import { CardHeader, Heading } from "@chakra-ui/react";
import { Text, Box } from "@chakra-ui/react";
import { useCurrentRoute } from "../hooks/useCurrentRoute";
import { useSelectedCategory } from "../hooks/useSelectedCategory";

export const Header = () => {
  const currentRoute = useCurrentRoute();

  return (
    <>
      {currentRoute?.title && (
        <CardHeader>
          <Heading size="md" className="title">
            {currentRoute?.title}
          </Heading>
        </CardHeader>
      )}
    </>
  );
};

export const QuestionHeader = () => {
  const { selectedDifficulty, selectedCategoryName } = useSelectedCategory();
  return (
    <>
      <Box className="question-header">
        <Text>
          <Text as="b">Category:</Text> {selectedCategoryName?.name}
        </Text>
        <Text>
          <Text as="b">Difficulty:</Text> {selectedDifficulty}
        </Text>
      </Box>
    </>
  );
};
