import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "./store";

//Components
import BannerMovie from "../../components/Cards/BannerMovie";

const Details: React.FC = () => {
  const baseUrlImage = import.meta.env.VITE_BASE_URL_IMAGE;

  const store = useLocalObservable(() => new Store());

  const { id } = useParams();

  useEffect(() => {
    store.fetchMovie(`${id}`);
  }, []);

  return (
    <>
      <BannerMovie imageUrl={`${baseUrlImage}${store.movie.poster_path}`} />
    </>
  );
};

export default observer(Details);
