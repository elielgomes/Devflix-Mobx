import axios from "axios";
import { IMovie } from "../../interfaces";

const baseUrl = import.meta.env.VITE_BASE_URL_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

const GetMovie = async (id: string) => {
  return axios.get<IMovie>(`${baseUrl}${id}?${apiKey}&language=pt-br`);
};
export default GetMovie;
