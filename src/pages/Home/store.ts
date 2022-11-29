import { action, makeObservable, observable } from "mobx";
import GetMovieList from "../../apis/getMovieList";
import GetGenreList from "../../apis/getGenreList";
import { IMovie, IMovieList, IGenres } from "../../interfaces";

export class Store {
	constructor() {
		makeObservable(this, {
			loading: observable,
			page: observable,
			movieList: observable,
			genreList: observable,
			random: observable,
			setRandomImage: action,
			setLoading: action,
			setMovieList: action,
			setGenreList: action,
			fetchGenreList: action,
			fetchMovieList: action,
		});
	}
	public loading = true;
	public page = 1;
	public movie: IMovie = {} as IMovie;
	public movieList: IMovieList | null = null;
	// public movieList: IMovieList = {} as IMovieList;
	public random = 0;
	public genreList: IGenres[] = [{}] as IGenres[];

	public setLoading(){
		this.loading = false;
	}

	public setRandomImage() {
		this.random = Math.floor(Math.random() * 20);
	}

	public setMovieList(movies: IMovieList) {
		this.movieList = movies;
	}

	public setGenreList(genres: IGenres[]) {
		this.genreList = genres;
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
			const response = await GetMovieList(page);
			this.setMovieList(response.data);
		} catch (error) {
			console.log(error);
		}

	};
}
