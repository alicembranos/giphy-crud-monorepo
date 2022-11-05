import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import styles from "./styles.module.css";

type SearchBarProps = {
	handleSubmit: () => any;
	handleChange: () => any;
	keyword: string;
};

const SearchBar = () => {
	const  setKeyword  = useContext(SearchContext);

	const handleChange = ({ target }: any) => {
		console.log(setKeyword)
	};

	return (
		<div>
			<form className={styles.form} onSubmit={() => {}}>
				<div className={styles.box}>
					<input
						id="search"
						type="text"
						value="{}"
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
