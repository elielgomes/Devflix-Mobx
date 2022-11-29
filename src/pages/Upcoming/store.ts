import { action, makeObservable, observable } from "mobx";
import GetUpComingMovieList from "../../apis/getUpComingMovies";
import GetGenreList from "../../apis/getGenreList";
import { IMovieList, IGenres } from "../../interfaces";

export class Store {
	constructor() {
		makeObservable(this, {
			page: observable,
			random: observable,
			genreList: observable,
			upcomingMovieList: observable,
			setRandomImage: action,
			setUpcomingMovieList: action,
			setGenreList: action,
			fetchGenreList: action,
			fetchUpcomingMovieList: action,
		});
	}

	public page = 1;
	public upcomingMovieList: IMovieList | null = null;
	public random = 0;
	public genreList: IGenres[] = [{}] as IGenres[];

	public setPage(page: number){
		this.page = page;
	}

	public setRandomImage() {
		this.random = Math.floor(Math.random() * 20);
	}

	public setUpcomingMovieList(movies: IMovieList) {
		this.upcomingMovieList = movies;
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

	public fetchUpcomingMovieList = async (page: number) => {
		try {
			const response = await GetUpComingMovieList(page);
			this.setUpcomingMovieList(response.data);
		} catch (error) {
			console.log(error);
		}
	};

}
