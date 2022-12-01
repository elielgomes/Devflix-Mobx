import React from "react";
import { Text, Flex, Box, List, ListItem, Button, useDisclosure } from "@chakra-ui/react";
import { IMovie } from "../../../interfaces";
import ModalMovie from "../../ModalMovie";
import { BsPlay } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface IProps {
	votePorcent: string | null;
	trailerKey?: string;
	movie: IMovie;
}

const MovieDetails: React.FC<IProps> = (props) => {

	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	return (
		<>
			<ModalMovie
				isOpen={isOpen}
				onClose={onClose}
				trailerKey={props.trailerKey}
			/>

			<Flex
				p="30px"
				borderRadius="10px"
				bg="transparent"
				maxW="600px"
				flexDirection="column"
				alignItems="flex-start"
				gap="20px"
				position="absolute"
				right={{ sm: "auto", lg: "-200px" }}
			>
				<Text color="primary.50" fontSize="30px" fontWeight="bold">{`${props.votePorcent}%`}</Text>
				<Flex
					justifyContent="space-between"
					gap="25px"
					w="100%"
					alignItems="flex-start"
				>
					<Text
						fontSize="30px"
						textAlign="start"
						maxW="400px"
						textShadow="0px 0px 3px #000"
					>{props.movie.title}
					</Text>
					<Text
						fontSize="40px"
						fontWeight="light"
						color="secondary.50"
						textShadow="0px 0px 3px #000"
					>{String(new Date(props.movie.release_date).getFullYear())}
					</Text>
				</Flex>

				<List display="flex" gap="30px">
					{props.movie.genres && props.movie.genres?.map((genre) => (
						<ListItem
							key={genre.id}
							color="secondary.50"
							fontSize="16px"
							textShadow="0px 0px 3px #000"
						>{(genre.name).toLocaleUpperCase()}
						</ListItem>
					))}
				</List>
				<Text fontSize="16px" textAlign="justify" textShadow="0px 0px 3px #000">
					{props.movie.overview
						? props.movie.overview
						: "Não conseguimos encontrar informações sobre a sinopse deste filme!"}
				</Text>
				<Flex gap="40px">
					<Button
						variant="outline"
						color="secondary.50"
						_hover={{
							transform: "scale(1.05)",
							backgroundColor: "primary.50",
							borderColor: "primary.50",
							color: "#fff",
						}}
						onClick={props.trailerKey
							? onOpen
							: () => window.open(`https://www.youtube.com/results?search_query=${props.movie.title && props.movie.title.replaceAll(" ", "+")}+Trailer+Oficial`)}
					>
						<Box
							as={BsPlay}
							mr="5px"
							width="30px"
							height="30px"
						/>
						Trailer
					</Button>
					<Button
						variant="outline"
						color="secondary.50"
						onClick={() => navigate(-1)}
						_hover={{
							transform: "scale(1.05)",
							backgroundColor: "primary.50",
							borderColor: "primary.50",
							color: "#fff",
						}}
					>Voltar
					</Button>
				</Flex>
			</Flex>
		</>
	);
};

export default MovieDetails;
