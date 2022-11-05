import { useEffect, useState } from "react";
import ModalPortal from "../Modal/Modal";
import UploadForm from "../UploadForm/UploadForm";
import styles from "./styles.module.css";

function getWindowSize() {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
}

const ButtonUpload = () => {
	const [windowSize, setWindowSize] = useState(getWindowSize());
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	const handleOnClick = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
            <button className={styles.button} onClick={handleOnClick}>{windowSize.innerWidth > 850 ? "UPLOAD GIF" : "+"}</button>
			{showModal && (
				<ModalPortal onClose={handleCloseModal}>
					<UploadForm />
				</ModalPortal>
			)}
		</>
	);
};

export default ButtonUpload;
