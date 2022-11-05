import ShareIcon from "@mui/icons-material/Share";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { common } from "@mui/material/colors";
import toast, { Toaster } from "react-hot-toast";
import styles from "./styles.module.css";

type GifCardProps = {
	gif: string;
	title: string;
	id: string;
	isUserCard: boolean;
};

const GifCard = ({ gif, title, id, isUserCard }: GifCardProps) => {
	const handleUpload = () => {
		navigator.clipboard.writeText(id);
		toast.success("Element copy to clipboard!");
	};

	const handleDelete = () => {};

	return (
		<>
			<div className={styles.card}>
				<div className={styles.image}>
					{isUserCard ? (
						<div className={styles.icons}>
							<div className={styles.icon2} id={id} onClick={handleUpload}>
								<ShareIcon sx={{ color: common.white }} />
							</div>
							<div className={styles.icon2} id={id} onClick={handleDelete}>
								<DeleteOutlineOutlinedIcon sx={{ color: common.white }} />
							</div>
						</div>
					) : (
						<div className={styles.icon} id={id} onClick={handleUpload}>
							<ShareIcon sx={{ color: common.white }} />
						</div>
					)}

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
