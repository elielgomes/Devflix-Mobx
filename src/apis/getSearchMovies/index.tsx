import axios from "axios";
import { IMovieList } from "../../interfaces";

const baseUrlSearch = import.meta.env.VITE_BASE_URL_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const GetSearchMovies = async (query: string, page: number) => {
  return axios.get<IMovieList>(
    `${baseUrlSearch}?${apiKey}&query=${query}&language=pt-br&page=${page}`
  );
};

export default GetSearchMovies;
