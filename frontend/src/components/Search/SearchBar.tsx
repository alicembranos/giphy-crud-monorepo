import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { getGifsFromApi } from "../../services/api-giphy";
import { SearchBarProps } from "../../types/types";
import styles from "./styles.module.css";

const SearchBar = ({ keyword, setKeyword, setGifs }: SearchBarProps) => {
	const handleChange = ({ target }: any) => {
		setKeyword(target.value);
	};

	const handleSubmit = () => {
		getGifsFromApi({ keyword }).then((data) => setGifs(data.data));
	};

	useEffect(() => {
		if (keyword.length === 0) {
			getGifsFromApi({ keyword: "a" }).then((data) => setGifs(data.data));
			return;
		}
		getGifsFromApi({ keyword }).then((data) => setGifs(data.data));
	}, [keyword, setGifs]);

	return (
		<div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.box}>
					<input
						id="search"
						type="text"
						value={keyword}
						placeholder="Search for gifs..."
						autoFocus
						onChange={handleChange}
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
