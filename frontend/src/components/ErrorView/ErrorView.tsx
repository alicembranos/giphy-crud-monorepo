import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const ErrorView = () => {
	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.notFound}>
					<h1 className={styles.header1}>
						4<span>0</span>4
					</h1>
				</div>
				<p className={styles.message}>
					The page you are looking for might have been removed had its name changed or is
					temporarily unavailable.
				</p>
				<Link replace to={"main"}>
					{/* <CustomButton value="HOME PAGE" /> */}
				</Link>
			</div>
		</div>
	);
};

export default ErrorView;
