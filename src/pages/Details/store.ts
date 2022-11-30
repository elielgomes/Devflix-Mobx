import { makeAutoObservable } from "mobx";
import GetMovie from "../../apis/getMovie";
import GetTrailer from "../../apis/getTrailer";
import { IMovie, ITrailer } from "../../interfaces";
import { FetchModelShelf } from "@startapp/mobx-utils/src/global";
import { AxiosResponse } from "axios";

export class Store {

	public fetchMovie: FetchModelShelf<AxiosResponse<IMovie, any>>;
	public fetchTrailer: FetchModelShelf<AxiosResponse<ITrailer, any>>;

	constructor(id: string) {
		makeAutoObservable(this);

		this.fetchMovie = new FetchModelShelf(id,
			GetMovie,
			{
				fetchOnConstructor: true,
			},
		);

		this.fetchTrailer = new FetchModelShelf(id,
			GetTrailer,
			{
				fetchOnConstructor: true,
			},
		);
	}

}
