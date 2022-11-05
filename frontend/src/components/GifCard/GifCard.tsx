import ShareIcon from "@mui/icons-material/Share";
import { common } from "@mui/material/colors";
import toast, { Toaster } from "react-hot-toast";
import styles from "./styles.module.css";

type GifCardProps = {
	gif: string;
	title: string;
	id: string;
};

const GifCard = ({ gif, title, id }: GifCardProps) => {
	const handleClick = () => {
		navigator.clipboard.writeText(id);
		toast.success("Element copy to clipboard!");
	};
	return (
		<>
			<div className={styles.card}>
				<div className={styles.image}>
					<div className={styles.icon} id={id} onClick={handleClick}>
						<ShareIcon sx={{ color: common.white }} />
					</div>
					<img src={gif} alt={title} />
				</div>
				<div className={styles.title}>
					<p>{title}</p>
				</div>
			</div>
			<Toaster />
		</>
	);
};

export default GifCard;
