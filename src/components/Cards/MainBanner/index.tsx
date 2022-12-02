import React from "react";
import { Box, Text, Image, Button, Link, Flex } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { IGenres, IMovie } from "../../../interfaces";

interface IProps {
	movie: IMovie;
	bgColorLoad: string;
	genreMovie?: IGenres[];
}

const MainBanner: React.FC<IProps> = (props) => {

	const baseUrlImage1280p = import.meta.env.VITE_BASE_URL_IMAGE_FULL;

	return (
		<>

			<Box
				bgImage={`linear-gradient(to bottom, transparent 0%, ${props.bgColorLoad} 100%), url(${baseUrlImage1280p}${props.movie?.backdrop_path})`}
				opacity=".9"
				minH="80vh"
				bgRepeat="no-repeat"
				bgSize="cover"
				bgPosition="center center"
				display="flex"
				alignItems="center"
				justifyContent="center"
				flexDirection="column"
			>
				<Image pt="90px" src="/assets/image/BrandCircle.png" />
				<Text
					fontSize={{ sm: "80px", md: "100px" }}
					as="h1"
					variant="titleLg"
					textAlign="center"
				>
					DEVFLIX
				</Text>
				<Flex
					direction="column"
					alignItems="center"
					justifyContent="center"
					maxW="700px"
					gap="20px"
				>
					<Text
						fontSize="30px"
						textAlign="center"
						p="0 20px"
					>{props.movie?.title}
					</Text>
					<Text>{props.genreMovie && props.genreMovie[1]?.name !== undefined ? `${props.genreMovie[0]?.name} | ${props.genreMovie[1]?.name}` : `${props.genreMovie && props.genreMovie[0]?.name}`}</Text>
					<Text
						textShadow="0x 0px 10px #000"
						fontSize="20px"
						p="0 20px"
					>Watch Devflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.
					</Text>
					<Link
						as={ReactLink}
						to={`/details/${props.movie?.id}`}
						style={{ textDecoration: "none" }}
					>
						<Button>WATCH NOW</Button>
					</Link>
				</Flex>
			</Box>

		</>
	);
};

export default MainBanner;
