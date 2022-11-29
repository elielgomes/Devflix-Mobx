import React, { useEffect } from "react";
import { Store } from "./store";
import useImageColor from "use-image-color";
import { useSearchParams } from "react-router-dom";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Grid, Container, Heading, Box, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Loader from "../../components/Loader";
import MovieCard from "../../components/Cards/MovieCard";
import MainBanner from "../../components/Cards/MainBanner";
import Pagination from "../../components/Buttons/Pagination";

const Search: React.FC = () => {
	const baseUrlImage1280p = import.meta.env.VITE_BASE_URL_IMAGE_FULL;
	const baseUrlImage = import.meta.env.VITE_BASE_URL_IMAGE;
	const store = useLocalObservable(() => new Store());
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q") as string;

	useEffect(() => {
		store.fetchSearchMovie(query, store.page);
		store.fetchGenreList();
	}, [store.page, query]);


	const { colors } = useImageColor(
		store.movieListSearch?.results && `${baseUrlImage1280p}${store.movieListSearch?.results[store.random]?.poster_path}`
		, { cors: true, colors: 2 });

	return (
		!store.movieListSearch?.results
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
					<Box w="100%" h="100%" bgColor={colors && store.movieListSearch?.results?.length !== 0 ? colors[0] : "#000"}>
						{store.movieListSearch?.results?.length !== 0 &&
							<MainBanner
								idMovie={`${store.movieListSearch?.results[store.movieListSearch.results[store.random].backdrop_path ? store.random : 0].id}`}
								titleMovie={`${store.movieListSearch?.results[store.movieListSearch.results[store.random].backdrop_path ? store.random : 0].title}`}
								genreMovie={
									store.genreList?.filter((e) => (
										e.id === store.movieListSearch?.results[store.movieListSearch.results[store.random].backdrop_path
											?
											store.random
											: 0].genre_ids[0] || e.id === store.movieListSearch?.results[store.movieListSearch?.results[store.random].backdrop_path
											? store.random
											: 0].genre_ids[1]
									))
								}
								bgColorLoad={colors && colors[0]}
								imageUrl={`${baseUrlImage1280p}${store.movieListSearch?.results[store.movieListSearch.results[store.random].backdrop_path ? store.random : 0].backdrop_path}`}
							/>}

						<Container
							maxW="1500px"
							minH="100vh"
							px="50px"
							py="100px"
						>
							<Heading
								textAlign="center"
								py="40px"
								mb="40px"
								color="secondary.100"
							><Box as={FaSearch} pr="10px" />{store.movieListSearch.results?.length !== 0 ? `Resultados para: ${query}` : `Nenhum Resultado para: ${query}`}
							</Heading>
							<Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="100px 60px"  >
								{store.genreList &&
									store.movieListSearch.results?.map((item) => (
										<MovieCard
											key={item.id}
											title={item.title}
											id={item.id}
											imageUrl={item.poster_path ? `${baseUrlImage}${item.poster_path}` : "/assets/image/undefined-card.png"}
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
							{store.movieListSearch.results.length !== 0 &&

								<Flex justifyContent="center" p="80px 0 0">
									<Pagination
										maxPage={store.movieListSearch?.total_pages}
										currentPage={store.page}
										nextPage={store.page + 1}
										skipPage={store.page + 2}
										changePrevPage={() => store.setPage(store.page - 1)}
										changeNextPage={() => store.setPage(store.page + 1)}
										changeSkipPage={() => store.setPage(store.page + 2)}
									/>
								</Flex>}
						</Container>
					</Box>
				</>
			)
	);
};

export default observer(Search);
