import { action, makeObservable, observable } from "mobx";
import GetMovie from "../../apis/getMovie";
import { IMovie } from "../../interfaces";

export class Store {
  constructor() {
    makeObservable(this, {
      page: observable,
      movie: observable,
      setMovie: action,
      fetchMovie: action,
    });
  }

  page: number = 1;
  movie: IMovie = {} as IMovie;

  setMovie = (movie: IMovie) => {
    this.movie = movie;
  };

  //Get Movie Details
  fetchMovie = async (id: string) => {
    try {
      const response = await GetMovie(id);
      this.setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}
