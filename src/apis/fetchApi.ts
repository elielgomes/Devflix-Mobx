import { IMovieList, ITrailer, IMovie, IGenreList } from "../interfaces";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrlGenres = import.meta.env.VITE_BASE_URL_GENRES;
const baseUrlMovie = import.meta.env.VITE_BASE_URL_MOVIE;
const baseUrlSearch = import.meta.env.VITE_BASE_URL_SEARCH;

export const GetTrailer = async (id: string) => {
	const response = await fetch(`${baseUrlMovie}${id}/videos?${apiKey}&language=pt-br`);
	const data: ITrailer = await response.json();
	return data;
};

export const GetGenreList = async () => {
	const response = await fetch(`${baseUrlGenres}movie/list?${apiKey}&language=pt-br`);
	const data: IGenreList = await response.json();
	return data;
};

export const GetSearchMovies = async (query: string, page: number) => {
	const response = await fetch(`${baseUrlSearch}?${apiKey}&query=${query}&include_adult=false&language=pt-br&page=${page}`);
	const data: IMovieList = await response.json();
	return data;
};

export const GetMovie = async (id: string) => {
	const response = await fetch(`${baseUrlMovie}${id}?${apiKey}&language=pt-br`);
	const data: IMovie = await response.json();
	return data;
};

export const GetPopularMovieList = async (page: number) => {
	const response = await fetch(`${baseUrlMovie}popular?${apiKey}&language=pt-br&page=${page}`);
	const data: IMovieList = await response.json();
	return data;
};

export const GetTopMovieList = async (page: number) => {
	const response = await fetch(`${baseUrlMovie}top_rated?${apiKey}&language=pt-br&page=${page}`);
	const data: IMovieList = await response.json();
	return data;
};

export const GetUpcomingMovieList = async (page: number) => {
	const response = await fetch(`${baseUrlMovie}upcoming?${apiKey}&language=pt-br&page=${page}`);
	const data: IMovieList = await response.json();
	return data;
};
