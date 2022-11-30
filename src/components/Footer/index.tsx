import React from "react";
import { Box, Container, Image, List, ListItem, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
	const footerList = [
		"Perguntas frequentes",
		"Formas de assistir",
		"Só na Devflix",
		"Central de Ajuda",
		"Termos de Uso",
		"Entre em contato",
		"Privacidade",
		"Avisos legais",
	];

	return (
		<>
			<Box bgColor="secondary.300" maxH="600px">
				<Container maxW="1500px" pt="40px" >
					<Box>
						<Image
							src="/assets/image/DEVFLIX-brand-sm.png"
							w="80px"
							m="0 0 30px 80px"
						/>
					</Box>
					<List
						display="grid"
						gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
						gap="10px 20px"
					>
						{footerList.map((item) => (
							<ListItem key={item} cursor="pointer" textAlign="center">
								<Text
									as="span"
									color="secondary.100"
									_hover={{ color: "secondary.50" }}
								>
									{item}
								</Text>
							</ListItem>
						))}
					</List>
					<Text color="secondary.200" py="60px" >
						© Devflix Brasil
					</Text>
				</Container>
			</Box>
		</>
	);
};
export default Footer;
