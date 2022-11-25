import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme";
import './global.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </>
);
