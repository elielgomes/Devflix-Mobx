import { makeAutoObservable } from "mobx";
import { GetMovie, GetTrailer } from "../../apis/fetchApi";
import { IMovie, ITrailer } from "../../interfaces";
import { FetchModelShelf } from "@startapp/mobx-utils/src/global";

export class Store {

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

	public get pageLoader() {
		return this.fetchMovie.loader.isLoading || !this.fetchMovie.model.value;
	}

	public fetchMovie: FetchModelShelf<IMovie>;
	public fetchTrailer: FetchModelShelf<ITrailer>;


}
