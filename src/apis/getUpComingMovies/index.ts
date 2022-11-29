import axios from "axios";

import { IMovieList } from "../../interfaces";

const baseUrl = import.meta.env.VITE_BASE_URL_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

const GetUpComingMovieList = async (page: number) => (
	axios.get<IMovieList>(
		`${baseUrl}upcoming?${apiKey}&language=pt-br&page=${page}`,
	)
);

export default GetUpComingMovieList;
