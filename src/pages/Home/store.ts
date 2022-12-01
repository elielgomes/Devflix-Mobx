import { makeAutoObservable } from "mobx";
import { GetGenreList, GetPopularMovieList, GetTopMovieList, GetUpcomingMovieList } from "../../apis/fetchApi";
import { IGenres, IMovie } from "../../interfaces";
import { PaginatedListShelf, AttributeShelf } from "@startapp/mobx-utils";

export class Store {

	constructor() {
		makeAutoObservable(this);

		this.fetchPopularMovieList = new PaginatedListShelf(
			async (page) => {
				const response = await GetPopularMovieList(page);
				this.totalPages.setValue(response.total_pages);
				return response.results;
			},
		);

		this.fetchTopMovieList = new PaginatedListShelf(
			async (page) => {
				const response = await GetTopMovieList(page);
				return response.results;
			},
		);

		this.fetchUpcomingMovieList = new PaginatedListShelf(
			async (page) => {
				const response = await GetUpcomingMovieList(page);
				return response.results;
			},
		);

	}

	public random = 0;
	public genreList: IGenres[] | null = null;
	public fetchTopMovieList: PaginatedListShelf<IMovie>;
	public fetchPopularMovieList: PaginatedListShelf<IMovie>;
	public fetchUpcomingMovieList: PaginatedListShelf<IMovie>;
	public totalPages = new AttributeShelf(0);

	public get pageLoader() {
		return this.fetchPopularMovieList.loader.isLoading || this.fetchTopMovieList.loader.isLoading || this.fetchUpcomingMovieList.loader.isLoading;
	}

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
