export interface IMovie {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: [{ id: number; name: string }];
  tagline: string;
}

export interface IMovieList {
results: IMovie[];
total_pages: number;
}
