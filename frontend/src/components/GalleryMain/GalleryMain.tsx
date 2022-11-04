import styles from "./styles.module.css";
import { useEffect, useState, memo } from "react";
import { getGifsFromApi } from "../../services/api-giphy";
import { TopLevel } from "../../types/inter";
import GifCard from "../GifCard/GifCard";

const GalleryMain = () => {
	const [gifs, setGifs] = useState<TopLevel[]>([]);

	useEffect(() => {
		getGifsFromApi({ keyword: "x" }).then((data) => setGifs(data.data));
	}, []);

	return (
		<div className={styles.container}>
			{gifs.length > 0 ? (
				gifs.map((gif) => (
					<GifCard key={gif.id} gif={gif.images.fixed_width.url} title={gif.title} />
				))
			) : (
				<p className={styles.container}>No results</p>
			)}
		</div>
	);
};

export default memo(GalleryMain);

// Generated by https://quicktype.io
