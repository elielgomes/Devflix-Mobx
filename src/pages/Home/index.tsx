import { useEffect } from "react";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "./store";

//Components
import MainBanner from "../../components/Cards/MainBanner";
import MovieCard from "../../components/Cards/MovieCard";
//Components Chakra UI
import { Container, Grid } from "@chakra-ui/react";

const Home: React.FC = () => {
  const baseUrlImage = import.meta.env.VITE_BASE_URL_IMAGE;

  const store = useLocalObservable(() => new Store());

  useEffect(() => {
    store.fetchMovieList(1);
  }, []);

  return (
    <>
      <MainBanner />
      <Container maxW="1500px" px="50px" py="100px">
        <Grid
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap="100px 60px"
        >
          {store.movieList.results?.map((item) => {
            return (
              <MovieCard
                key={item.id}
                title={item.title}
                id={item.id}
                imageUrl={`${baseUrlImage}${item.poster_path}`}
              />
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default observer(Home);
