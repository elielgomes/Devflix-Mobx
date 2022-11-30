import axios, { AxiosResponse } from "axios";

import { IMovieList } from "../../interfaces";

const baseUrl = import.meta.env.VITE_BASE_URL_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

const GetPopularMovieList = async (page: number): Promise<AxiosResponse<IMovieList, any>> => (
	axios.get(`${baseUrl}popular?${apiKey}&language=pt-br&page=${page}`)
);

export default GetPopularMovieList;
