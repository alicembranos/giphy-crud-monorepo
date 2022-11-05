import { createContext, useEffect, useState } from "react";
import { getGifsFromApi } from "../services/api-giphy";
import { TopLevel } from "../types/inter";

type SearchContextType = {
	keyword: string;
	setKeyword: React.Dispatch<React.SetStateAction<string>>;
	gifs: TopLevel[];
	setGifs: React.Dispatch<React.SetStateAction<TopLevel[]>>;
};

type Props = {
	children: React.ReactNode;
};

const SearchContext = createContext({} as SearchContextType);

export const SearchContextProvider = ({ children }: Props) => {
	const [keyword, setKeyword] = useState<string>("");
	const [gifs, setGifs] = useState<TopLevel[]>([]);

	useEffect(() => {
		getGifsFromApi({ keyword: "a" }).then((data) => setGifs(data.data));
	}, []);

	return (
		<SearchContext.Provider value={{ keyword, setKeyword, gifs, setGifs }}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContext;
