import { extendTheme } from "@chakra-ui/react";
import { Text } from "./Text";
import { Button } from "./Button";

export const transitions = {
	default: "all .2s",
};

const customTheme = extendTheme({
	styles: {
		global: {
			"html": {
				scrollBehavior: "smooth",
			},
			"body": {
				backgroundColor: "#000",
				fontFamily: "'Roboto', sans-serif",
			},
			"body::-webkit-scrollbar": {
				width: "5px",
			},
			"body::-webkit-scrollbar-track": {
				background: "transparent",
			},
			"body::-webkit-scrollbar-thumb": {
				backgroundColor: "#e50914",
				borderRadius: "20px",
			},
			"svg": {
				display: "inline-block",
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
			200: "#ffffff1f",
			300: "#1e1e1e6f",
			400: "#1e1e1e",
		},
	},
	components: {
		Text,
		Button,
	},
	breakpoints: {
		"sm": "320px",
		"md": "425px",
		"lg": "768px",
		"xl": "1024px",
		"2x1": "1536px",
	},
});

export default customTheme;
