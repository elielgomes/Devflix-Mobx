import { useEffect } from "react";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "../../store";

//Components 
import MovieCard from "../../components/MovieCard";

const Home: React.FC = () => {
  
  const store = useLocalObservable(() => new Store());
  
  useEffect(()=>{
       store.actionGetMovieList(1);
  },[])

  return (
    <>
      {
        store.movieList.results?.map((item) => {
          return (
            <MovieCard title={item.title}/>
          );
        })
      }
    </>
  );
};

export default observer(Home);
