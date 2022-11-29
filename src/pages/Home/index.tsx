import React, { useEffect } from "react";
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

	useEffect(() => {
		store.fetchMovieList(1);
		store.fetchTopMovieList(1);
		store.fetchUpComingMovieList(1);
		store.fetchGenreList();
		store.setRandomImage();
	}, []);

	const { colors } = useImageColor(
		store.movieList?.results
		&& `${baseUrlImage1280p}${store.movieList.results[store.random].poster_path}`
		, { cors: true, colors: 2 });

	return (
		!store.movieList?.results && !store.topMovieList?.results
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
							idMovie={`${store.movieList?.results[store.movieList.results[store.random].backdrop_path ? store.random : 0].id}`}
							titleMovie={`${store.movieList?.results[store.movieList.results[store.random].backdrop_path ? store.random : 0].title}`}
							genreMovie={
								store.genreList?.filter((e) => (
									e.id === store.movieList?.results[store.movieList.results[store.random].backdrop_path
										?
										store.random
										: 0].genre_ids[0] || e.id === store.movieList?.results[store.movieList?.results[store.random].backdrop_path
										? store.random
										: 0].genre_ids[1]
								))
							}
							bgColorLoad={colors && colors[0]}
							imageUrl={`${baseUrlImage1280p}${store.movieList?.results[store.movieList.results[store.random].backdrop_path ? store.random : 0].backdrop_path}`}
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
									movieListSlider={store.topMovieList && store.topMovieList}
								/>
							</Box>

							<Box>
								<Slider
									urlSection="/popular"
									titleSection="Popular Movies"
									color={colors && colors[0]}
									genreList={store.genreList && store.genreList}
									movieListSlider={store.movieList && store.movieList}
								/>
							</Box>

							<Box>
								<Slider
									urlSection="/upcoming"
									titleSection="Upcoming Movies"
									color={colors && colors[0]}
									genreList={store.genreList && store.genreList}
									movieListSlider={store.upComingMovieList && store.upComingMovieList}
								/>
							</Box>
						</Container>
					</Box>
				</>
			)
	);
};

export default observer(Home);

{/* <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="100px 60px"  >
{store.genreList &&
	store.movieList?.results?.map((item) => (
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
</Grid> */}
