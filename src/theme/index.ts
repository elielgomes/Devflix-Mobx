import { extendTheme } from "@chakra-ui/react";
import { Text } from "./Text";
import { Button } from "./Button";

export const transitions = {
	default: "all .2s",
};

const customTheme = extendTheme({
	styles: {
		global: {
			body: {
				backgroundColor: "#000",
				fontFamily: "'Roboto', sans-serif",
			},
			svg: {
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
});

export default customTheme;
