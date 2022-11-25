import { defineStyleConfig } from "@chakra-ui/react";

export const Image = defineStyleConfig({
  variants: {
    brandSm: {
      width: "80px",
    },
    brandMd: {
      width: "141px",
    },
    cardSm: {
      borderRadius: "10px",
      transition: "all 0.2s",
      _hover:{
          transform: "scale(1.05)"
      }
    },
    cardLg: {
      width: "300px",
      borderRadius: "10px",
      transition: "all 0.2s",
      _hover: {
        transform: "scale(1.05)",
      },
    },
    image404: {
      width: "600px",
    },
  }
});
