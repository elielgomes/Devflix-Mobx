import { makeAutoObservable } from "mobx";
import { GetGenreList, GetSearchMovies } from "../../apis/fetchApi";
import { IGenres, IMovie } from "../../interfaces";
import { PaginatedListShelf, AttributeShelf	} from "@startapp/mobx-utils";


export class Store {
	constructor() {
		makeAutoObservable(this);

		this.fetchSearchMovie = new PaginatedListShelf(
			async (page) => {
				const response = await GetSearchMovies(this.queryShelf.value, page);
				this.totalPages.setValue(response.total_pages);
				this.setRandomImage(response.results.length);
				return response.results;
			},
		);
	}

	public queryShelf = new AttributeShelf("");
	public totalPages = new AttributeShelf(0);
	public fetchSearchMovie: PaginatedListShelf<IMovie>;
	public random = 0;
	public genreList: IGenres[]	| null = null;

	public get pageLoader() {
		return this.fetchSearchMovie.loader.isLoading || this.genreList?.length === 0;
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
