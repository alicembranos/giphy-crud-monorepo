import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.css";
import { useContext } from "react";
import SearchContext from "../../context/SearchContext";

type SearchBarProps = {
	handleSubmit: () => any;
	handleChange: () => any;
	keyword: string;
};

const SearchBar = () => {
	const { keyword, setKeyword } = useContext(SearchContext);
	console.log(keyword);
	const handleChange = ({ target }: any) => {
		setKeyword(target.value);
	};

	return (
		<div>
			<form className={styles.form} onSubmit={() => {}}>
				<div className={styles.box}>
					<input
						id="search"
						type="text"
						value={keyword}
						placeholder="Search for gifs..."
						autoFocus
						onChange={(handleChange)}
						className={styles.input}
					/>
					<button type="submit" className={styles.button}>
						<SearchIcon fontSize="medium"></SearchIcon>
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
