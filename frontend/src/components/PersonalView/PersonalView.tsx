import useSearch from "../../hooks/useSeatch";
import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import { getUsersGif } from "../../services/api-service";
import useUser from "../../hooks/useUser";
import { TopLevel } from "../../types/inter";
import GalleryMain from "../GalleryMain/GalleryMain";
import styles from "./styles.module.css";
import useAuth from "../../hooks/useAuth";

const PersonalView = () => {
	const { keyword, setKeyword, setGifs } = useSearch();
    const { user } = useUser();
    const {auth} = useAuth()
	const [userGifs, setUserGifs] = useState<TopLevel[]>([]);
 
	useEffect(() => {
		const jwt = user?.jwt;
		getUsersGif(jwt).then((data) => {
			if (data.ok) {
				setUserGifs(data.data);
			}
		});
	}, [user]);

	return (
		<div>
			<NavBar keyword={keyword} setKeyword={setKeyword} setGifs={setGifs} />
			<div className={styles.container}>
				<GalleryMain gifs={userGifs} isUserCard={true} />
			</div>
		</div>
	);
};

export default PersonalView;
