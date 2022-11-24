import { action, makeObservable, observable } from "mobx";
import GetMovie from "../apis/getMovie";
import GetMovieList from "../apis/getMovieList";
import GetSearchMovies from "../apis/getSearchMovies";
import { IMovie, IMovieList} from "../interfaces";

export class Store {
  constructor() {
    makeObservable(this, {
      page: observable,
      search: observable,
      movie: observable,
      movieList: observable,
      movieListSearch: observable,
      actionSearch: action,
      actionGetMovie: action,
      actionGetMovieList: action,
      actionGetSearchMovie: action,
    });
  }

  page: number = 1;
  search: string = "";
  movie: IMovie = {} as IMovie;
  movieList: IMovieList = {} as IMovieList;
  movieListSearch: IMovieList = {} as IMovieList;

  //Change Search Value
  actionSearch = (value: string) => {
    this.search = value;
  };

  //Get Movie Details
  actionGetMovie = async (id: string) => {
    GetMovie(id).then((response) => {
      this.movie = response.data;
    });
  };

  //Get Movie List
  actionGetMovieList = async (page : number) => {
    GetMovieList(page).then((response) => {
      this.movieList = response.data;
    });
  };

  //Get Search Movie
  actionGetSearchMovie = async (query: string, page: number) => {
    GetSearchMovies(query, page).then((response) => {
      this.movieListSearch = response.data;
    });
  };
}
