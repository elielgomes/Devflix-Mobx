import axios from "axios";
import { IGenreList } from "../../interfaces";

const baseUrl = import.meta.env.VITE_BASE_URL_GENRES;
const apiKey = import.meta.env.VITE_API_KEY;

const GetGenreList = async () => (
	axios.get<IGenreList>(`${baseUrl}movie/list?${apiKey}&language=pt-br`)
);
export default GetGenreList;
