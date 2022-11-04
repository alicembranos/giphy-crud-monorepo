import ShareIcon from "@mui/icons-material/Share";
import { common } from "@mui/material/colors";
import styles from "./styles.module.css";

type GifCardProps = {
	gif: string;
	title: string;
};

const GifCard = ({ gif, title }: GifCardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<div className={styles.icon}>
					<ShareIcon sx={{ color: common.white }} />
				</div>
				<img src={gif} alt={title} />
			</div>
			<div className={styles.title}  >
				<p>{title}</p>
			</div>
		</div>
	);
};

export default GifCard;
