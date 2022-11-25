import { action, makeObservable, observable } from "mobx";

export class Store {
  constructor() {
    makeObservable(this, {
      search: observable,
      setSearch: action,
    });
  }

  search: string = "";

  setSearch = (value: string) => {
    this.search = value;
  };
}
