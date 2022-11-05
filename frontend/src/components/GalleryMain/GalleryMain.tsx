import { memo } from "react";
import { GalleryMainProps } from "../../types/types";
import GifCard from "../GifCard/GifCard";
import styles from "./styles.module.css";

const GalleryMain = ({ gifs, isUserCard }: GalleryMainProps) => {
	return (
		<div className={styles.container}>
			{gifs.length > 0 ? (
				gifs.map((gif) => (
					<GifCard
						key={gif.id}
						gif={gif.images?.fixed_width.url ?? gif.image}
						title={gif.title}
						id={gif.id}
						isUserCard={isUserCard}
					/>
				))
			) : (
				<p className={styles.text}>No results for this word...</p>
			)}
		</div>
	);
};

export default memo(GalleryMain);

// Generated by https://quicktype.io
