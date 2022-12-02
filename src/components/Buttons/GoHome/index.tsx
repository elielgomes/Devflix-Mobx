import React from "react";
import { Flex, Container, Box, Button, Link } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { Link as ReactLink } from "react-router-dom";

const GoHome: React.FC = () => (
	<>
		<Flex
			pointerEvents="none"
			position="fixed"
			zIndex="100"
			w="100%"
			h="100px"
			p="0 30px"
			bottom="0"
		>
			<Container maxW="1500px"	display="flex" justifyContent="flex-end">
				<Link
					as={ReactLink}
					to="/"
					style={{ textDecoration: "none" }}
				>
					<Button
						w="60px"
						h="60px"
						borderRadius="100%"
						bgColor="primary.50"
						pointerEvents="initial"
						opacity=".7"
					>
						<Box as={FaHome} w="40px" h="40px" />
					</Button>
				</Link>
			</Container>

		</Flex>
	</>
);

export default GoHome;
