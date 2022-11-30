import React, { useEffect } from "react";
import { Store } from "./store";
import useImageColor from "use-image-color";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Grid, Container, Box, Flex } from "@chakra-ui/react";
import Loader from "../../components/Loader";
import MovieCard from "../../components/Cards/MovieCard";
import MainBanner from "../../components/Cards/MainBanner";
import Pagination from "../../components/Buttons/Pagination";

const Top = () => {
	const store = useLocalObservable(() => new Store());
	const baseUrlImage1280p = import.meta.env.VITE_BASE_URL_IMAGE_FULL;
	const baseUrlImage = import.meta.env.VITE_BASE_URL_IMAGE;

	useEffect(() => {
		store.fetchTopMovieList(store.page);
		store.fetchGenreList();
		store.setRandomImage();
	}, [store.page]);

	const { colors } = useImageColor(
		store.topMovieList?.results
		&& `${baseUrlImage1280p}${store.topMovieList.results[store.random].poster_path}`
		, { cors: true, colors: 2 });

	return (
		!store.topMovieList?.results
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
					<Box w="100%" h="100%" bgColor={colors && colors[0]}>
						<MainBanner
							idMovie={`${store.topMovieList?.results[store.topMovieList.results[store.random].backdrop_path ? store.random : 0].id}`}
							titleMovie={`${store.topMovieList?.results[store.topMovieList.results[store.random].backdrop_path ? store.random : 0].title}`}
							genreMovie={
								store.genreList?.filter((e) => (
									e.id === store.topMovieList?.results[store.topMovieList.results[store.random].backdrop_path
										?
										store.random
										: 0].genre_ids[0] || e.id === store.topMovieList?.results[store.topMovieList?.results[store.random].backdrop_path
										? store.random
										: 0].genre_ids[1]
								))
							}
							bgColorLoad={colors && colors[0]}
							imageUrl={`${baseUrlImage1280p}${store.topMovieList?.results[store.topMovieList.results[store.random].backdrop_path ? store.random : 0].backdrop_path}`}
						/>
						<Container
							maxW="1500px"
							p="150px 50px"
						>
							<Grid
								templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
								justifyContent="center"
								alignItems="center"
								gap="100px 60px"
							>
								{store.genreList &&
									store.topMovieList?.results?.map((item) => (
										<MovieCard
											key={item.id}
											title={item.title}
											id={item.id}
											imageUrl={`${baseUrlImage}${item.poster_path}`}
											genre={store.genreList?.find((e) => e.id === item.genre_ids[0])?.name === "Triller"
												? "Suspense"
												: store.genreList?.find((e) => e.id === item.genre_ids[0])?.name}
											releaseDate={String(new Date(item.release_date).getFullYear())}
											voteAverage={`${item.vote_average}`}
											color={colors && colors[0]}
										/>
									),
									)}
							</Grid>
							<Flex justifyContent="center" p="80px 0 0">
								<Pagination
									maxPage={store.topMovieList?.total_pages}
									currentPage={store.page}
									nextPage={store.page + 1}
									skipPage={store.page + 2}
									changePrevPage={() => store.setPage(store.page - 1)}
									changeNextPage={() => store.setPage(store.page + 1)}
									changeSkipPage={() => store.setPage(store.page + 2)}
								/>
							</Flex>
						</Container>
					</Box>
				</>
			)
	);
};

export default observer(Top);
