import mainImage from "../../assets/images/mainImage.png";
import styles from "./styles.module.css";

const MainImage = () => {
	return (
		<div className={styles.container}>
			<img
				className={styles.image}
				src={mainImage}
				alt="Welcome"
			/>
		</div>
	);
};

export default MainImage;
