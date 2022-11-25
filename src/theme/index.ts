import { extendTheme } from "@chakra-ui/react";
import { Text } from "./Text";

export const transitions = {
  default: "all .2s",
};

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#000",
        fontFamily: "'League Spartan', sans-serif",
      },
    },
  },
  colors: {
    primary: {
      50: "#e50914",
      100: "#990008",
    },
    secondary: {
      50: "#fff",
      100: "#ffffff7f",
      200: "#1e1e1e6f",
    },
  },
  components: {
    Text,
  },
});

export default customTheme;
