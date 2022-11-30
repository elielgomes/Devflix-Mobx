import React,{ createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export interface ISearchInput {
	searchInput: string;
	setSearchInput: Dispatch<SetStateAction<string>>;
}

export const SearchInputContext = createContext<ISearchInput | null>(null);

const SearchInputProvider = ({ children }: { children: ReactNode }) => {
	const [searchInput, setSearchInput] = useState<string>("");
	return (
		<SearchInputContext.Provider value={{ searchInput, setSearchInput }}>
			{children}
		</SearchInputContext.Provider>
	);
};

export default SearchInputProvider;
