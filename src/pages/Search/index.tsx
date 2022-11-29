import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "./store";
import MovieCard from "../../components/Cards/MovieCard";
import { Grid, Container, Heading, Box } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Search: React.FC = () => {
	const baseUrlImage = import.meta.env.VITE_BASE_URL_IMAGE;
	const store = useLocalObservable(() => new Store());
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q") as string;

	useEffect(() => {
		store.fetchSearchMovie(query, 1);
		store.fetchGenreList();
	}, [query]);

	return (
		<>
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
								imageUrl={`${baseUrlImage}${item.poster_path}`}
								genre={store.genreList?.find((e) => e.id === item.genre_ids[0])?.name === "Triller"
									? "Suspense"
									: store.genreList?.find((e) => e.id === item.genre_ids[0])?.name}
								releaseDate={String(new Date(item.release_date).getFullYear())}
								voteAverage={`${item.vote_average}`}
							/>
						),
						)}
				</Grid>
			</Container>
		</>
	);
};

export default observer(Search);
