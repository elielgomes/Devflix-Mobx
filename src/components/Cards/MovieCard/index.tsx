import React from "react";
import { Link, Text, GridItem, Box, Image, Flex } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { IMovie } from "../../../interfaces";

interface IProps {
	movie: IMovie;
	genre?: string | null;
	color: string;
}

const MovieCard: React.FC<IProps> = (props) => {

	const baseUrlImage = import.meta.env.VITE_BASE_URL_IMAGE;
	const star = Number(props.movie?.vote_average) / 2;
	const arrStars = [];
	const starHalf = star.toFixed(1);

	for (let i = 1; i < star; i++) {
		arrStars.push("Full");
	}

	if (Number(starHalf[2]) >= 3 && Number(starHalf[2]) <= 6) {
		arrStars.push("Half");
	} else if (Number(starHalf[2]) >= 8) {
		arrStars.push("Full");
	}

	for (let j = 1; arrStars.length < 5; j++) {
		arrStars.push("Void");
	}

	return (
		<>
			<GridItem display="flex" flexDirection="column" alignItems="center">
				<Link as={ReactLink} to={`/details/${props.movie?.id}`}>
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
								backgroundColor: "#00000086",
							},
							"p.release-date": {
								display: "initial",
							},
							"div.rating": {
								display: "none",
							},
						}}
					>

						<Box
							className="cont"
							transition="all 0.4s"
							maxW="200%"
							width="100%"
							h="315px"
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							<Image
								className="imageCard"
								src={`${baseUrlImage}${props.movie?.poster_path}`}
								maxW="200%"
								w="auto"
								height="100%"
							/>
						</Box>

						<Box
							className="foot"
							h="110px"
							w="100%"
							bg={`${props.color}cc`}
							position="absolute"
							bottom="0"
							transition="all 1s"
						>
							<Text
								fontSize="25px"
								textOverflow="ellipsis"
								overflow="hidden"
								whiteSpace="nowrap"
								padding="10px 15px 0"
							>{props.movie?.title}
							</Text>
							<Text>{props.genre === "Thriller" ? "Suspense" : `${props.genre}`}</Text>
							<Flex
								className="rating"
								alignItems="center"
								justifyContent="center"
								gap="5px"
								padding="10px"
							>
								{arrStars.map((e, index) => (
									<Text as="span" key={index}>{
										e === "Full" ? <BsStarFill /> : (e === "Half" ? <BsStarHalf /> : e === "Void" && <BsStar />)
									}
									</Text>
								))}
							</Flex>
							<Flex
								justifyContent="center"
								p="10px"
							>
								<Text
									className="release-date"
									w="100%"
									display="none"
								>{String(new Date(props.movie?.release_date).getFullYear())}
								</Text>
							</Flex>
						</Box>
					</Flex>
				</Link>
			</GridItem>
		</>
	);
};
export default MovieCard;
