import AsideMain from "../AsideMain/AsideMain";
import GalleryMain from "../GalleryMain/GalleryMain";
import NavBar from "../NavBar/NavBar";
import styles from "./styles.module.css";

const MainView = () => {
	return (
		<div>
			<NavBar />
			<div className={styles.container}>
				<AsideMain />
				<GalleryMain />
			</div>
		</div>
	);
};

export default MainView;
