import { action, makeObservable, observable } from "mobx";
import GetPopularMovieList from "../../apis/getPopularMovieList";
import GetGenreList from "../../apis/getGenreList";
import { IMovieList, IGenres } from "../../interfaces";

export class Store {
	constructor() {
		makeObservable(this, {
			page: observable,
			random: observable,
			genreList: observable,
			popularMovieList: observable,
			setRandomImage: action,
			setPopularMovieList: action,
			setGenreList: action,
			fetchGenreList: action,
			fetchPopularMovieList: action,
		});
	}

	public page = 1;
	public popularMovieList: IMovieList | null = null;
	public random = 0;
	public genreList: IGenres[] = [{}] as IGenres[];

	public setPage(page: number){
		this.page = page;
	}

	public setRandomImage() {
		this.random = Math.floor(Math.random() * 20);
	}

	public setPopularMovieList(movies: IMovieList) {
		this.popularMovieList = movies;
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

	public fetchPopularMovieList = async (page: number) => {
		try {
			const response = await GetPopularMovieList(page);
			this.setPopularMovieList(response.data);
		} catch (error) {
			console.log(error);
		}
	};

}
