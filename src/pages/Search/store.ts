import {  makeAutoObservable  } from "mobx";
import { GetGenreList, GetSearchMovies } from "../../apis/fetchApi";
import { IGenres, IMovie } from "../../interfaces";
import { PaginatedListShelf, AttributeShelf} from "@startapp/mobx-utils";

export class Store {
	constructor(query: string) {
		makeAutoObservable(this);
		this.fetchSearchMovie = new PaginatedListShelf(
			async (page) => {
				const response = await GetSearchMovies(query, page);
				this.totalPages.setValue(response.total_pages);
				return response.results;
			},
		);
	}

	public totalPages = new AttributeShelf(0);
	public fetchSearchMovie: PaginatedListShelf<IMovie>;

	public random = 0;
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
