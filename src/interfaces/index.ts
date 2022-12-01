export interface IGenres {
	id: number;
	name: string;
}

export interface IGenreList {
	genres: IGenres[];
}

export interface IMovie {
	id: string;
	title: string;
	poster_path: string;
	backdrop_path: string;
	overview: string;
	release_date: string;
	vote_average: number;
	runtime: number;
	genres: IGenres[];
	genre_ids: number[];
}

export interface IMovieList {
	results: IMovie[];
	total_pages: number;
}

export interface ITrailer {
	results: [{ key: string }];
}
