import React from "react";
import { Box, Flex, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";

const Loader: React.FC = () => {

	const load = keyframes`
				0% {
      background-image: linear-gradient(#ffffff7f 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0);
    }
    25% {
      background-image: linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0);
    }
    50% {
      background-image: linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0);
    }
    75% {
      background-image: linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0);
    }
    100% {
      background-image: linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#e50914 30px, transparent 0);
    }
	`;

	const prefersReducedMotion = usePrefersReducedMotion();

	const pgfill = prefersReducedMotion
		? undefined
		: `${load} 500ms linear infinite`;

	return (
		<>
			<Flex
				justifyContent="center"
				pt="50px"
			>
				<Box
					as="span"
					display="block"
					position="relative"
					h="30px"
					width="150px"
					bgImage="linear-gradient(#ffffff7f 30px, transparent 0), linear-gradient(#ffffff7f 30px, transparent 0), linear-gradient(#ffffff7f 30px, transparent 0), linear-gradient(#ffffff7f 30px, transparent 0)"
					bgRepeat="no-repeat"
					bgSize="30px auto"
					bgPosition="0 0, 40px 0, 80px 0, 120px 0"
					animation={pgfill}
				/>
			</Flex>
		</>
	);
};

export default Loader;
