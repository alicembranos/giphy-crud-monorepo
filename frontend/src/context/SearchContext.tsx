import { createContext, useState } from "react";

type SearchContextType = {
	keyword: string;
	setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
	children: React.ReactNode;
};

const SearchContext = createContext({} as SearchContextType);

export const SearchContextProvider = ({ children }: Props) => {
	const [keyword, setKeyword] = useState<string>("");

	return (
		<SearchContext.Provider value={{ keyword, setKeyword }}>{children}</SearchContext.Provider>
	);
};

export default SearchContext;
