import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
	baseStyle: {
		color: "#fff",
		fontSize: "16px",
		borderRadius: "2px",
	},
	variants: {
		default: {
			backgroundColor: "primary.50",
			_hover: {
				transform: "scale(1.1)",
				filter: "brightness(0.8)",
			},
		},
	},
	defaultProps: {
		variant: "default",
	},
});
