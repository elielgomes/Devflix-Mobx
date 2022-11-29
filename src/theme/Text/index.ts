import { defineStyleConfig } from "@chakra-ui/react";

export const Text = defineStyleConfig({
	baseStyle: {
		textAlign: "center",
		color: "#fff",
	},
	sizes: {
	},
	variants: {
		default: {
			fontSize: "16px",
		},
		titleBrand:{
			fontFamily: "Bebas Neue, Bebas, sans-serif",
			fontWeight: "bolder",
			color: "rgb(229, 9, 20)",
			fontSize: "25px",
			letterSpacing: " 5px",
			textShadow: " #000 2px 2px 20px",
		},
		titleLg: {
			fontFamily: "Bebas Neue, Bebas, sans-serif",
			fontWeight: "bolder",
			color: "rgb(229, 9, 20)",
			fontSize: "100px",
			letterSpacing: " 10px",
			textShadow: " #000 2px 2px 20px",
		},
		titleMd: {
			fontSize: "32px",
			fontWeight: "bold",
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
