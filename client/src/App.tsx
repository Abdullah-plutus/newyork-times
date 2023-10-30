import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "./pages";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <HomePage />
      </ChakraProvider>
    </>
  );
}

export default App;
