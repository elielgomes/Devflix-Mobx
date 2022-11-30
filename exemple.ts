import { AttributeShelf, FetchModelShelf, LoaderShelf, PaginatedListShelf } from "@startapp/mobx-utils";
import { makeAutoObservable } from "mobx";
// import api from "~/resources/api";
// import { onFetchError } from "~/resources/fetchError";


export class Store {
	// FETCHMODELSHELF
	public fetchModelShelf: FetchModelShelf<api.AdminUser>;
	public fetchModelShelfForUser: FetchModelShelf<api.User>;

	// Paginatedshelf
	public paginatedListShelf: PaginatedListShelf<api.AdminUser>;
	// ATTRIBUTESHELF
	public name = "";

	public setName(name: string) {
		this.name = name;
	}

	public nameAttributeShelf = new AttributeShelf("");
	public setNameAttribute(name: string) {
		this.nameAttributeShelf.setValue(name);
	}

	constructor(id: string){
		makeAutoObservable(this);

		this.fetchModelShelf = new FetchModelShelf(
			id,
			api.getAdminUser,
			{
				fetchOnConstructor: true,
			});

		this.fetchModelShelfForUser = new FetchModelShelf(
			id,
			api.getUser,
			{
				fetchOnConstructor: true,
			});

		this.paginatedListShelf = new PaginatedListShelf(
			api.getAllAdminUsersMasters,
			{
				fetchOnConstructor: true,
				onFetchError,
			},
		);
		this.fetch();
	}
	// LOADERSHELF
	public loader = new LoaderShelf();

	public fetch = async () => {
		this.loader.start();
		try {
			await api.getAdminUser("tsedtased");
			this.name.value;
		} catch (e) {
			console.error(e);
		} finally {
			this.loader.end();
		}
	};

	// public loading: boolean;

	// public setLoading (loading: boolean) {
	// 	this.loading = loading;
	// }

	// public fetch = () => {
	// 	this.setLoading(true);
	// 	try {

	// 	} catch (e) {

	// 	} finally {
	// 		this.setLoading(false);
	// 	}
	// };

}
