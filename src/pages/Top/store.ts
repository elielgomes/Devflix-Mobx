import { action, makeObservable, observable } from "mobx";
import GetTopMovieList from "../../apis/getTopMovieList";
import GetGenreList from "../../apis/getGenreList";
import { IMovieList, IGenres } from "../../interfaces";

export class Store {
	constructor() {
		makeObservable(this, {
			page: observable,
			random: observable,
			genreList: observable,
			topMovieList: observable,
			setRandomImage: action,
			setTopMovieList: action,
			setGenreList: action,
			fetchGenreList: action,
			fetchTopMovieList: action,
		});
	}

	public page = 1;
	public topMovieList: IMovieList | null = null;
	public random = 0;
	public genreList: IGenres[] = [{}] as IGenres[];

	public setPage(page: number){
		this.page = page;
	}

	public setRandomImage() {
		this.random = Math.floor(Math.random() * 20);
	}

	public setTopMovieList(movies: IMovieList) {
		this.topMovieList = movies;
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

	public fetchTopMovieList = async (page: number) => {
		try {
			const response = await GetTopMovieList(page);
			this.setTopMovieList(response.data);
		} catch (error) {
			console.log(error);
		}
	};

}
