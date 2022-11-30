import React from "react";
import { Link as ReactLink } from "react-router-dom";
import {
	Container,
	Text,
	Button,
	Link,
	Image,
	Flex,
} from "@chakra-ui/react";

const PageNotFound: React.FC = () => (
	<>
		<Container
			minH="100vh"
			py="100px"
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection="column"
		>
			<Text variant="titleMd" color="primary.50">
				Ooops...
			</Text>
			<Text variant="titleMd" textAlign="center">Página não encontrada!</Text>
			<Image src="/assets/image/404.png" />
			<Flex
				justifyContent="center"
				align="center"
				flexDirection="column"
				gap="20px"
			>
				<Text fontSize="30px">
					PEGUE SUA PIPOCA E ASSISTA OS
					<Text
						as="span"
						fontSize="30px"
						fontWeight="normal"
						color="primary.50"
						p="0 10px"
					>
						MELHORES
					</Text>
					FILMES
				</Text>
				<Link
					as={ReactLink}
					to="/"
					style={{ textDecoration: "none" }}
				>
					<Button variant="default">Assistir</Button>
				</Link>
			</Flex>
		</Container>
	</>
);

export default PageNotFound;
