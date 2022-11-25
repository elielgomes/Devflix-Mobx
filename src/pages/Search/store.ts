import { action, makeObservable, observable } from "mobx";
import GetSearchMovies from "../../apis/getSearchMovies";
import { IMovie, IMovieList } from "../../interfaces";

export class Store {
  constructor() {
    makeObservable(this, {
      page: observable,
      movieListSearch: observable,
      setMovieListSearch: action,
      fetchSearchMovie: action,
    });
  }

  page: number = 1;
  movieListSearch: IMovieList = {} as IMovieList;

  //Set Movie List Search
  setMovieListSearch(movies: IMovieList) {
    this.movieListSearch = movies;
  }

  //Fetch Search Movie
  fetchSearchMovie = async (query: string, page: number) => {
    try {
      const response = await GetSearchMovies(query, page);
      this.setMovieListSearch(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}
