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
	const baseUrlImage = import.meta.env.VITE_BASE_URL_IMAGE;
	const baseUrlImage1280p = import.meta.env.VITE_BASE_URL_IMAGE_FULL;

	useEffect(() => {
		store.fetchGenreList();
		store.setRandomImage(20);
		store.fetchUpcomingMovieList.fetchPage(1);
	}, []);

	const { colors } = useImageColor(
		store.fetchUpcomingMovieList?.items
		&& `${baseUrlImage1280p}${store.fetchUpcomingMovieList.items[store.random]?.poster_path}`
		, { cors: true, colors: 2 });

	return (
		!store.fetchUpcomingMovieList?.items
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
							idMovie={`${store.fetchUpcomingMovieList?.items[store.fetchUpcomingMovieList.items[store.random]?.backdrop_path ? store.random : 0]?.id}`}
							titleMovie={`${store.fetchUpcomingMovieList?.items[store.fetchUpcomingMovieList.items[store.random]?.backdrop_path ? store.random : 0]?.title}`}
							genreMovie={
								store.genreList?.filter((e) => (
									e.id === store.fetchUpcomingMovieList?.items[store.fetchUpcomingMovieList.items[store.random]?.backdrop_path
										?
										store.random
										: 0]?.genre_ids[0] || e.id === store.fetchUpcomingMovieList?.items[store.fetchUpcomingMovieList?.items[store.random]?.backdrop_path
										? store.random
										: 0]?.genre_ids[1]
								))
							}
							bgColorLoad={colors && colors[0]}
							imageUrl={`${baseUrlImage1280p}${store.fetchUpcomingMovieList?.items[store.fetchUpcomingMovieList.items[store.random]?.backdrop_path ? store.random : 0]?.backdrop_path}`}
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
									store.fetchUpcomingMovieList?.items.map((item) => (
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
									maxPage={500}
									currentPage={store.fetchUpcomingMovieList.page}
									nextPage={store.fetchUpcomingMovieList.page + 1}
									skipPage={store.fetchUpcomingMovieList.page + 2}
									changePrevPage={() => store.fetchUpcomingMovieList.previousPage()}
									changeNextPage={() => store.fetchUpcomingMovieList.nextPage()}
									changeSkipPage={() => store.fetchUpcomingMovieList.fetchPage(store.fetchUpcomingMovieList.page + 2)}
								/>
							</Flex>
						</Container>
					</Box>
				</>
			)
	);
};

export default observer(Top);
