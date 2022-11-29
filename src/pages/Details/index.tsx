import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "./store";
import useImageColor from "use-image-color";
import {
	Box,
	Container,
	Flex,
	Text,
	Button,
	List,
	ListItem,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import Loader from "../../components/Loader";
import { BsPlay } from "react-icons/bs";

const Details: React.FC = () => {
	const baseUrlImage1280p = import.meta.env.VITE_BASE_URL_IMAGE_FULL;
	const store = useLocalObservable(() => new Store());
	const navigate = useNavigate();
	const { id } = useParams();
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		store.fetchMovie(`${id}`);
		store.fetchTrailer(`${id}`);
	}, []);

	const { colors } = useImageColor(store.movie?.poster_path && `${baseUrlImage1280p}${store.movie.poster_path}`, { cors: true, colors: 4 });
	const votePorcent = store.movie && (store.movie.vote_average * 10).toFixed(0);

	const goBack = () => {
		navigate(-1);
	};

	return (
		!store.movie
			? (
				<Container
					h="100vh"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Loader />
				</Container>
			)
			: (
				<>
					<Flex>
						<Box
							bgColor={colors && colors[0]}
							width="40vw"
							minHeight="100vh"
							position="relative"
							display="flex"
							alignItems="center"
						>

							<Modal isOpen={isOpen} onClose={onClose} size="2x1">
								<ModalOverlay />
								<ModalContent
									bg="#000"
									width="1000px"
									height="600px"
									m="auto"
									py="20px"
								>
									<ModalCloseButton color="#fff" />
									<ModalBody >
										<Box
											as="iframe"
											width="100%"
											height="100%"
											src={`https://www.youtube.com/embed/${store.trailer}`}
											title="YouTube video player"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									</ModalBody>
								</ModalContent>
							</Modal>
							<Flex
								p="30px"
								borderRadius="10px"
								bg="transparent"
								maxW="600px"
								flexDirection="column"
								alignItems="flex-start"
								gap="20px"
								position="absolute"
								right="-200px"
							>
								<Text color="primary.50" fontSize="30px" fontWeight="bold">{`${votePorcent}%`}</Text>
								<Flex alignItems="flex-start" justifyContent="center" gap="25px">
									<Text fontSize="60px">{store.movie.title}</Text>
									<Text fontSize="60px" fontWeight="light">{String(new Date(store.movie.release_date).getFullYear())}</Text>
								</Flex>

								<List display="flex" gap="30px">
									{store.movie.genres?.map((genre) => (
										<ListItem
											key={genre.id}
											color="secondary.50"
											fontSize="20px"
										>{(genre.name).toLocaleUpperCase()}
										</ListItem>
									))}
								</List>
								<Text fontSize="18px" textAlign="justify">
									{store.movie.overview
										? store.movie.overview
										: "Não conseguimos encontrar informações sobre a sinopse deste filme!"}
								</Text>
								<Flex gap="40px">
									<Button
										variant="outline"
										color="secondary.50"
										onClick={store.trailer ? onOpen : () => location.href = `https://www.youtube.com/results?search_query=${store.movie?.title && store.movie?.title.replaceAll(" ", "+")}+Trailer+Oficial, _blank`}
									>
										<Box
											as={BsPlay}
											mr="5px"
											width="30px"
											height="30px"
										/>
										Trailer
									</Button>
									<Button variant="outline" color="secondary.50" onClick={() => goBack()}>Voltar</Button>
								</Flex>
							</Flex>
						</Box>
						<Box
							bgImage={`linear-gradient(to left, transparent 0%,${colors && colors[0]} 100%), url(${baseUrlImage1280p}${store.movie.backdrop_path && store.movie.backdrop_path})`}
							bgRepeat="no-repeat"
							bgSize="cover"
							bgPosition="center"
							display="flex"
							justifyContent="center"
							alignItems="center"
							minH="100vh"
							w="60vw"
							flexDirection="column"
						/>
					</Flex>
				</>
			)
	);
};

export default observer(Details);

