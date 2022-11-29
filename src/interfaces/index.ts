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
	name: string;
	poster_path: string;
	backdrop_path: string;
	overview: string;
	release_date: string;
	first_air_date: string;
	vote_average: number;
	runtime: number;
	genres: IGenres[];
	genre_ids: number[];
	// tagline: string;
}

export interface IMovieList {
	results: IMovie[];
	total_pages: number;
}

export interface ITrailer {
	results: [{ key: string }];
}

// export interface ITvShow {
// 	id: string;
// 	name: string;
// 	poster_path: string;
// 	backdrop_path: string;
// 	overview: string;
// 	first_air_date: string;
// 	genres: IGenres[];
// 	genre_ids: number[];
// 	release_date: string;
// 	vote_average: number;
// 	title: string;

// }

// export interface ITvShowList {
// 	results: ITvShow[];
// 	total_pages: number;
// }
