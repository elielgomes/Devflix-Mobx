import { action, makeObservable, observable } from "mobx";
import GetSearchMovies from "../../apis/getSearchMovies";
import GetGenreList from "../../apis/getGenreList";
import { IMovieList, IGenres } from "../../interfaces";

export class Store {
	constructor() {
		makeObservable(this, {
			page: observable,
			movieListSearch: observable,
			genreList: observable,
			setMovieListSearch: action,
			fetchSearchMovie: action,
			setGenreList: action,
			fetchGenreList: action,
		});
	}

	public page = 1;
	public movieListSearch: IMovieList = {} as IMovieList;
	public genreList: IGenres[] = [{}] as IGenres[];

	public setGenreList(genres: IGenres[]) {
		this.genreList = genres;
	}

	public setMovieListSearch(movies: IMovieList) {
		this.movieListSearch = movies;
	}

	public fetchGenreList = async () => {
		try {
			const response = await GetGenreList();
			this.setGenreList(response.data.genres);
		} catch (error) {
			console.log(error);
		}
	};

	public fetchSearchMovie = async (query: string, page: number) => {
		try {
			const response = await GetSearchMovies(query, page);
			this.setMovieListSearch(response.data);
		} catch (error) {
			console.log(error);
		}
	};
}
