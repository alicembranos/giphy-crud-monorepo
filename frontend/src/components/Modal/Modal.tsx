import ReactDOM from "react-dom";
import styles from "./styles.module.css";

type ModalProps = {
	children: JSX.Element;
	onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>
				<button className={styles.button} onClick={onClose}>
					❌
				</button>
				{children}
			</div>
		</div>
	);
};

export default function ModalPortal({ children, onClose }:ModalProps) {
	return ReactDOM.createPortal(
		<Modal onClose={onClose}>{children}</Modal>,
		document.getElementById("modal-root")!
	);
}
