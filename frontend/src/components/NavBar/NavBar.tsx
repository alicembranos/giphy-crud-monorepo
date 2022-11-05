import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import AvatarMenu from "../AvatarMenu/AvatarMenu";
import ButtonUpload from "../ButtonUpload/ButtonUpload";
import SearchBar from "../Search/SearchBar";
import styles from "./styles.module.css";

const NavBar = ({ keyword, setKeyword, setGifs }: any) => {
	const {user} = useUser();
	const { auth } = useAuth();
	const location = useLocation();

	return (
		<nav className={styles.navbar}>
			<img src={logo} alt="Giphy" className={styles.logo} />
			<SearchBar keyword={keyword} setKeyword={setKeyword} setGifs={setGifs} />
			{auth?.id || user?.id ? (
				<div className={styles.userDiv}>
					<ButtonUpload />
					<AvatarMenu />
				</div>
			) : (
				<Link className={styles.link} to="/login" state={{ from: location }}>
					LOGIN
				</Link>
			)}
		</nav>
	);
};

export default NavBar;
