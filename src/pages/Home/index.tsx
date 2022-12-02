import React, { useLayoutEffect } from "react";
import { Store } from "./store";
import useImageColor from "use-image-color";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Container, Box } from "@chakra-ui/react";
import Loader from "../../components/Loader";
import Slider from "../../components/Slider";
import MainBanner from "../../components/Cards/MainBanner";

const Home: React.FC = () => {
	const store = useLocalObservable(() => new Store());
	const baseUrlImage1280p = import.meta.env.VITE_BASE_URL_IMAGE_FULL;

	useLayoutEffect(() => {
		store.fetchGenreList();
		store.setRandomImage(19);
		store.fetchTopMovieList.fetchPage(1);
		store.fetchPopularMovieList.fetchPage(1);
		store.fetchUpcomingMovieList.fetchPage(1);
	}, []);

	window.scrollTo(0, 0);

	const { colors } = useImageColor(
		store.fetchPopularMovieList.items
		&& `${baseUrlImage1280p}${store.fetchPopularMovieList.items[store.random]?.poster_path}`
		, { cors: true, colors: 2 });

	return (
		store.pageLoader
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
					<Box
						p="0 0 150px"
						h="100%"
						w="100%"
						bgColor={colors && colors[0]}
					>

						<MainBanner
							idMovie={`${store.fetchPopularMovieList?.items[store.fetchPopularMovieList.items[store.random]?.backdrop_path ? store.random : 0]?.id}`}
							titleMovie={`${store.fetchPopularMovieList?.items[store.fetchPopularMovieList.items[store.random]?.backdrop_path ? store.random : 0]?.title}`}
							genreMovie={
								store.genreList?.filter((e) => (
									e.id === store.fetchPopularMovieList?.items[store.fetchPopularMovieList.items[store.random]?.backdrop_path
										?
										store.random
										: 0]?.genre_ids[0] || e.id === store.fetchPopularMovieList?.items[store.fetchPopularMovieList?.items[store.random]?.backdrop_path
										? store.random
										: 0]?.genre_ids[1]
								))
							}
							bgColorLoad={colors && colors[0]}
							imageUrl={`${baseUrlImage1280p}${store.fetchPopularMovieList?.items[store.fetchPopularMovieList.items[store.random]?.backdrop_path ? store.random : 0]?.backdrop_path}`}
						/>
						<Container
							maxW="1500px"
							px="50px"
							py="100px"
							display="flex"
							flexDirection="column"
							gap="150px"
						>
							<Box>
								<Slider
									urlSection="/top"
									titleSection="Top Movies"
									color={colors && colors[0]}
									genreList={store.genreList && store.genreList}
									movieListSlider={store.fetchTopMovieList.items && store.fetchTopMovieList.items}
								/>
							</Box>

							<Box>
								<Slider
									urlSection="/popular"
									titleSection="Popular Movies"
									color={colors && colors[0]}
									genreList={store.genreList && store.genreList}
									movieListSlider={store.fetchPopularMovieList.items && store.fetchPopularMovieList.items}
								/>
							</Box>

							<Box>
								<Slider
									urlSection="/upcoming"
									titleSection="Upcoming Movies"
									color={colors && colors[0]}
									genreList={store.genreList && store.genreList}
									movieListSlider={store.fetchUpcomingMovieList.items && store.fetchUpcomingMovieList.items}
								/>
							</Box>
						</Container>
					</Box>
				</>
			)
	);
};

export default observer(Home);
