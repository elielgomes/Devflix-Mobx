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
import GoHome from "../../components/Buttons/GoHome";

const Search: React.FC = () => {
	const baseUrlImage1280p = import.meta.env.VITE_BASE_URL_IMAGE_FULL;
	const baseUrlImage = import.meta.env.VITE_BASE_URL_IMAGE;

	const [searchParams] = useSearchParams();
	const query = searchParams.get("q") as string;
	const store = useLocalObservable(() => new Store());

	useEffect(() => {
		store.queryShelf.setValue(query);
		store.fetchSearchMovie.fetchPage(1);
		store.fetchGenreList();
	}, [query]);

	window.scroll(0, 0);

	const { colors } = useImageColor(
		store.fetchSearchMovie.items && `${baseUrlImage1280p}${store.fetchSearchMovie?.items[store.random]?.poster_path}`
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
					<Box w="100%" h="100%" bgColor={colors && store.fetchSearchMovie?.items?.length !== 0 ? colors[0] : "#000"}>
						{store.fetchSearchMovie?.items?.length !== 0 &&
							<MainBanner
								idMovie={`${store.fetchSearchMovie?.items[store.fetchSearchMovie.items[store.random]?.backdrop_path ? store.random : 0]?.id}`}
								titleMovie={`${store.fetchSearchMovie?.items[store.fetchSearchMovie.items[store.random]?.backdrop_path ? store.random : 0]?.title}`}
								genreMovie={
									store.genreList?.filter((e) => (
										e.id === store.fetchSearchMovie?.items[store.fetchSearchMovie.items[store.random]?.backdrop_path
											?
											store.random
											: 0]?.genre_ids[0] || e.id === store.fetchSearchMovie?.items[store.fetchSearchMovie?.items[store.random]?.backdrop_path
											? store.random
											: 0]?.genre_ids[1]
									))
								}
								bgColorLoad={colors && colors[0]}
								imageUrl={`${baseUrlImage1280p}${store.fetchSearchMovie?.items[store.fetchSearchMovie.items[store.random]?.backdrop_path ? store.random : 0]?.backdrop_path}`}
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
							><Box as={FaSearch} pr="10px" />{store.fetchSearchMovie.items?.length !== 0 ? `Resultados para: ${query}` : `Nenhum Resultado para: ${query}`}
							</Heading>
							<Grid
								templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
								justifyContent="center"
								alignItems="center"
								gap="100px 60px"
							>
								{store.genreList &&
									store.fetchSearchMovie?.items?.map((item) => (
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
							{store.fetchSearchMovie.items.length !== 0 &&

								<Flex justifyContent="center" p="80px 0 0">
									<Pagination
										maxPage={store.totalPages.value}
										currentPage={store.fetchSearchMovie.page}
										nextPage={store.fetchSearchMovie.page + 1}
										skipPage={store.fetchSearchMovie.page + 2}
										changePrevPage={() => store.fetchSearchMovie.previousPage()}
										changeNextPage={() => store.fetchSearchMovie.nextPage()}
										changeSkipPage={() => store.fetchSearchMovie.fetchPage(store.fetchSearchMovie.page + 2)}
									/>
								</Flex>}
						</Container>
					</Box>
					<GoHome />
				</>
			)
	);
};

export default observer(Search);
