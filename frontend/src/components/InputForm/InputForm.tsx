import { InputProps } from "../../types/types";
import styles from "./styles.module.css";

const InputForm = ({
	type,
	id,
	name,
	value,
	icon,
	handleChange,
	placeholder,
}: InputProps) => {
	return (
		<div className={styles.inputContainer}>
			<input
				className={styles.input}
				type={type}
				id={id}
				name={name}
				onChange={handleChange}
				value={value}
				placeholder={placeholder}
			/>
			<div className={styles.icon}>{icon}</div>
		</div>
	);
};

export default InputForm;
