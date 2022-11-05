import AsideMain from "../AsideMain/AsideMain";
import GalleryMain from "../GalleryMain/GalleryMain";
import NavBar from "../NavBar/NavBar";
import useSearch from "../../hooks/useSeatch";
import styles from "./styles.module.css";

const MainView = () => {
	const { keyword, setKeyword, gifs, setGifs } = useSearch();
	return (
		<div>
			<NavBar keyword={keyword} setKeyword={setKeyword} setGifs={setGifs} />
			<div className={styles.container}>
				<AsideMain />
				<GalleryMain gifs={gifs} isUserCard={false} />
			</div>
		</div>
	);
};

export default MainView;
