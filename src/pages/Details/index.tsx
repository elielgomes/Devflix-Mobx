import React from "react";
import { useParams} from "react-router-dom";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "./store";
import useImageColor from "use-image-color";
import {
	Box,
	Container,
	Flex,
} from "@chakra-ui/react";
import Loader from "../../components/Loader";
import MovieDetails from "../../components/Cards/MovieDetails";

const Details: React.FC = () => {
	const baseUrlImage1280p = import.meta.env.VITE_BASE_URL_IMAGE_FULL;
	const { id } = useParams();
	const store = useLocalObservable(() => new Store(id || ""));

	const { colors } = useImageColor(store.fetchMovie.model.value?.poster_path && `${baseUrlImage1280p}${store.fetchMovie.model.value.poster_path}`, { cors: true, colors: 4 });
	const votePorcent = store.fetchMovie.model.value && (store.fetchMovie.model.value.vote_average * 10).toFixed(0);

	return (
		!store.fetchMovie.model.value
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
					<Flex direction={{ sm: "column-reverse", lg: "row" }}>
						<Box
							bgColor={colors && colors[0]}
							width={{ sm: "100%", lg: "40vw" }}
							minHeight={{ sm: "100vh" }}
							position="relative"
							display="flex"
							alignItems={{ sm: "flex-start", lg: "center" }}
							justifyContent={{ sm: "center" }}
						>
							<MovieDetails
								movie={store.fetchMovie.model.value}
								trailerKey={store.fetchTrailer.model.value?.results[0]?.key}
								votePorcent={votePorcent}
							/>
						</Box>
						<Box
							bgImage={{
								sm: `linear-gradient(to bottom, transparent 0%,${colors && colors[0]} 100%), url(${baseUrlImage1280p}${store.fetchMovie.model.value.backdrop_path ? store.fetchMovie.model.value.backdrop_path : store.fetchMovie.model.value.poster_path})`,
								lg: `linear-gradient(to left, transparent 0%,${colors && colors[0]} 100%), url(${baseUrlImage1280p}${store.fetchMovie.model.value.backdrop_path ? store.fetchMovie.model.value.backdrop_path : store.fetchMovie.model.value.poster_path})`,
							}}
							bgRepeat="no-repeat"
							bgSize="cover"
							bgPosition="center"
							display="flex"
							justifyContent="center"
							alignItems="center"
							minH={{ sm: "40vh" }}
							w={{ sm: "100%", lg: "60vw" }}
							flexDirection="column"
						/>
					</Flex >
				</>
			)
	);
};

export default observer(Details);
