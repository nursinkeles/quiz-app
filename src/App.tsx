import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "./components/Container";
const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Container />
    </ChakraProvider>
  );
};

export default App;
