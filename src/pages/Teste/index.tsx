import React from "react";
import { Box, Flex, Container, Text, Image } from "@chakra-ui/react";

const Carousel: React.FC = () => (

	<>
		<Container h="100vh" display="flex" alignItems="center">
			<Flex
				h="425px"
				w="210px"
				bg="#000"
				position="relative"
				overflow="hidden"
				alignItems="flex-start"
				justifyContent="center"
				_hover={{
					"div.cont": {
						height: "100%",
						width: "400px",
					},
					"div.foot": {
						backgroundColor: "#1e1e1ea2",
					},
				}}
			>

				<Box
					className="cont"
					transition="all 0.2s"
					maxW="200%"
					width="100%"
					h="315px"
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Image
						className="imageCard"
						transition="all 0.2s"
						src="https://image.tmdb.org/t/p/w500//xdmmd437QdjcCls8yCQxrH5YYM4.jpg"
						maxW="200%"
						w="auto"
						height="100%"
					/>
				</Box>


				<Box
					className="foot"
					h="110px"
					w="100%"
					bg="#ffff0096"
					position="absolute"
					bottom="0"
					transition="all 0.5s"
				>
					<Text
						fontSize="25px"
						textOverflow="ellipsis"
						overflow="hidden"
						whiteSpace="nowrap"
						padding="10px 15px 0"
					>Darevil
					</Text>
					<Text>Crime, 2022</Text>
				</Box>
			</Flex>
		</Container>
	</>
)
export default Carousel;
