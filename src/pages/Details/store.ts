import { action, makeObservable, observable } from "mobx";
import GetMovie from "../../apis/getMovie";
import GetTrailer from "../../apis/getTrailer";
import { IMovie } from "../../interfaces";

export class Store {
	constructor() {
		makeObservable(this, {
			page: observable,
			movie: observable,
			trailer: observable,
			setTrailer: action,
			setMovie: action,
			fetchMovie: action,
			fetchTrailer: action,
		});
	}

	public page = 1;
	public movie: IMovie | null = null;
	public trailer: string | undefined = "";

	public setMovie = (movie: IMovie) => {
		this.movie = movie;
	};

	public setTrailer = (key?: string) => {
		this.trailer = key;
	};

	public fetchMovie = async (id: string) => {
		try {
			const response = await GetMovie(id);
			this.setMovie(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	public fetchTrailer = async (id: string) => {
		try {
			const response = await GetTrailer(id);
			this.setTrailer(response.data.results[0]?.key);
		} catch (error) {
			console.log(error);
		}
	};

}
