import axios from "axios";

import { IMovieList } from "../../interfaces";

const baseUrl = import.meta.env.VITE_BASE_URL_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

const GetMovieList = async (page: number) => (
	axios.get<IMovieList>(
		`${baseUrl}popular?${apiKey}&language=pt-br&page=${page}`,
	)
);

export default GetMovieList;
