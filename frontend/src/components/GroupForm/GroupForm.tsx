import InputForm from "../InputForm/InputForm";
import { InputProps } from "../../types/types";
import { capitalize } from "../../utils";
import styles from "./styles.module.css";

const GroupForm = ({ type, id, name, value, icon, handleChange, placeholder }: InputProps) => {
	return (
		<div className={styles.container}>
			<label className={styles.label}>{capitalize(name)}</label>
			<InputForm
				id={id}
				type={type}
				name={name}
				value={value}
				icon={icon}
				handleChange={handleChange}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default GroupForm;
