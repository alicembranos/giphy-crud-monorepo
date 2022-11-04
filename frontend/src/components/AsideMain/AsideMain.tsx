import { useEffect, useState } from "react";
import { getTrendingGifs } from "../../services/api-giphy";
import styles from "./styles.module.css";

const AsideMain = () => {
	const [trends, setTrends] = useState<string[]>([]);

	useEffect(() => {
		getTrendingGifs().then((data) => setTrends(data.data));
	}, []);

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Trending Categories</h1>
			{trends.length > 0 ? (
				trends.map((trend, index) => (
					<div key={index} className={styles.text}>
						#{trend}
					</div>
				))
			) : (
				<p className={styles.paragraph}>No results for trending categories</p>
			)}
		</div>
	);
};

export default AsideMain;
