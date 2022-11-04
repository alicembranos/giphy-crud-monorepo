import MainImage from "../MainImage/MainImage";
import styles from "./styles.module.css";

type GenericFormProps = {
	element: JSX.Element
}

const GenericForm = ({element}:GenericFormProps) => {
	return (
		<div className={styles.container}>
			<MainImage />
			{element}
		</div>
	);
};

export default GenericForm;
