import { CardHeader, Heading } from "@chakra-ui/react";
import { Text, Box } from "@chakra-ui/react";
import { useCurrentRoute } from "../hooks/useCurrentRoute";
import { QuestionHeaderProps } from "../types/Type";

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

export const QuestionHeader = ({ object }: QuestionHeaderProps) => {
  return (
    <Box className="question-header">
      {object.map((item, index) => (
        <Text key={index}>
          <Text as="b">{item.title}:</Text> {item.value}
        </Text>
      ))}
    </Box>
  );
};
