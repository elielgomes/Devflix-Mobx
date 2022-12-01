import { makeAutoObservable } from "mobx";
import { GetGenreList, GetPopularMovieList } from "../../apis/fetchApi";
import { IMovie, IGenres } from "../../interfaces";
import { PaginatedListShelf } from "@startapp/mobx-utils";

export class Store {
	constructor() {
		makeAutoObservable(this);
		this.fetchPopularMovieList = new PaginatedListShelf(
			async (page) => {
				const response = await GetPopularMovieList(page);
				return response.results;
			},
		);
	}

	public random = 0;
	public fetchPopularMovieList: PaginatedListShelf<IMovie>;
	public genreList: IGenres[] = [{}] as IGenres[];

	public setRandomImage(results: number) {
		this.random = Math.floor(Math.random() * results);
	}

	public setGenreList(genres: IGenres[]) {
		this.genreList = genres;
	}

	public fetchGenreList = async () => {
		try {
			const response = await GetGenreList();
			this.setGenreList(response.genres);
		} catch (error) {
			console.log(error);
		}
	};

}
