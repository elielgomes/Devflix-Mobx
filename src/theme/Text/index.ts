import { defineStyleConfig } from "@chakra-ui/react";

export const Text = defineStyleConfig({
  baseStyle: {
    textAlign: "center",
    color: "#fff",
  },
  sizes: {
    sm: {
      fontSize: "20px",
    },
    md: {
      fontSize: "32px",
    },
    lg: {
      fontSize: "20px",
    },
  },
  variants: {
    default: {
      fontSize: "16px",
    },
    titleLg: {
      paddingTop: "40px",
      fontFamily: "Bebas Neue, Bebas, sans-serif",
      fontWeight: "bolder",
      color: "rgb(229, 9, 20)",
      fontSize: "200px",
      letterSpacing: " 10px",
      textShadow: " #000 2px 2px 20px",
    },
    titleMd: {
      fontSize: "32px",
      fontWeight: "bold",
      padding: "10px",
    },
    titleSm: {
      fontWeight: "bold",
      fontSize: "20px",
      padding: "10px",
    },
  },
  defaultProps: {
    variant: "default",
  },
});
