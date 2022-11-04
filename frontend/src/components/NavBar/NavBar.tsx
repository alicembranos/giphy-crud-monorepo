import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
import AvatarMenu from "../AvatarMenu/AvatarMenu";
import SearchBar from "../Search/SearchBar";
import styles from "./styles.module.css";

const NavBar = () => {
	const { auth } = useAuth();
	const location = useLocation();

	return (
		<nav className={styles.navbar}>
			<img src={logo} alt="Giphy" className={styles.logo} />
			<SearchBar />
			{auth?.id ? (
				<AvatarMenu />
			) : (
				<Link className={styles.link} to="/login" state={{ from: location }}>
					LOGIN
				</Link>
			)}
		</nav>
	);
};

export default NavBar;
