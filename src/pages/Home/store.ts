import { action, makeObservable, observable } from "mobx";
import GetMovieList from "../../apis/getMovieList";
import { IMovie, IMovieList } from "../../interfaces";

export class Store {
  constructor() {
    makeObservable(this, {
      page: observable,
      movieList: observable,
      setMovieList: action,
      fetchMovieList: action,
    });
  }

  page: number = 1;
  movie: IMovie = {} as IMovie;
  movieList: IMovieList = {} as IMovieList;

  //Set Movie List
  setMovieList(movies: IMovieList) {
    this.movieList = movies;
  }

  //Fetch Movie List
  fetchMovieList = async (page: number) => {
    try {
      const response = await GetMovieList(page);
      this.setMovieList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}
