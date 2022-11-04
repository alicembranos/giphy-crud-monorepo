import styles from "./styles.module.css";

type ButtonProps = {
	text: string;
};
const Button = ({ text }: ButtonProps) => {
	return <button className={styles.button} type="submit">{text}</button>;
};

export default Button;
