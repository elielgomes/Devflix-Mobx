import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "../../store";
import useDebounce from "../../hooks/useDebounce";

//Import Components Chakra UI
import { Input } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  const store = useLocalObservable(() => new Store());
  const navigate = useNavigate();
  const debounceValue: string = useDebounce(store.search, 2000);

  useEffect(() => {
    if (!debounceValue || !debounceValue.trim()) return;

    store.actionGetSearchMovie(debounceValue, 1);
    navigate(`/search?q=${debounceValue}`);
  }, [debounceValue]);

  return (
    <>
      <Input
        placeholder="Search your movies"
        htmlSize={22}
        width="auto"
        value={store.search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          store.actionSearch(e.target.value)
        }
      />
    </>
  );
};

export default observer(Navbar);
