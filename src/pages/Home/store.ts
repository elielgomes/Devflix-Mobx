import { makeAutoObservable	} from "mobx";
import GetPopularMovieList from "../../apis/getPopularMovieList";
import GetGenreList from "../../apis/getGenreList";
import GetTopMovieList from "../../apis/getTopMovieList";
import GetUpComingMovieList from "../../apis/getUpComingMovies";
import { IMovie, IMovieList, IGenres} from "../../interfaces";
import { PaginatedListShelf } from "@startapp/mobx-utils";
import { AxiosResponse } from "axios";

export class Store {

	// public fetchPopularMovieList: PaginatedListShelf<AxiosResponse<IMovie, any>>;

	constructor() {
		makeAutoObservable(this);

		// this.fetchPopularMovieList = new PaginatedListShelf(
		// 	 (page: number) => GetPopularMovieList(page),
		// 	{
		// 		fetchOnConstructor: true,
		// 	},
		// );
	}

	public page = 1;
	public movie: IMovie = {} as IMovie;
	public movieList: IMovieList | null = null;
	public topMovieList: IMovieList | null = null;
	public upComingMovieList: IMovieList | null = null;
	public random = 0;
	public genreList: IGenres[] = [{}] as IGenres[];


	public setRandomImage() {
		this.random = Math.floor(Math.random() * 20);
	}

	public setMovieList(movies: IMovieList) {
		this.movieList = movies;
	}

	public setGenreList(genres: IGenres[]) {
		this.genreList = genres;
	}

	public setTopMovieList(movies: IMovieList) {
		this.topMovieList = movies;
	}

	public setUpComingMovieList(movies: IMovieList) {
		this.upComingMovieList = movies;
	}

	public fetchGenreList = async () => {
		try {
			const response = await GetGenreList();
			this.setGenreList(response.data.genres);
		} catch (error) {
			console.log(error);
		}
	};

	public fetchMovieList = async (page: number) => {
		try {
			const response = await GetPopularMovieList(page);
			this.setMovieList(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	public fetchTopMovieList = async (page: number) => {
		try {
			const response = await GetTopMovieList(page);
			this.setTopMovieList(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	public fetchUpComingMovieList = async (page: number) => {
		try {
			const response = await GetUpComingMovieList(page);
			this.setUpComingMovieList(response.data);
		} catch (error) {
			console.log(error);
		}
	};

}
