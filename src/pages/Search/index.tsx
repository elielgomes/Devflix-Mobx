import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "../../store";

const Search: React.FC = () => {
  const store = useLocalObservable(() => new Store());

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") as string;

  useEffect(() => {
    store.actionGetSearchMovie(query, 1);
  }, [query]);

  return (
    <>
      {store.movieListSearch.results?.map((item) => {
        return <p>{item.title}</p>;
      })}
    </>
  );
};

export default observer(Search);
