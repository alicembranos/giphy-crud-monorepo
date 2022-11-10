import GroupForm from "../GroupForm/GroupForm";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { common } from "@mui/material/colors";
import Button from "../Button/Button";
import { TypeForm } from "../../types/types";
import { useState, useEffect } from "react";
import { register } from "../../services/auth-service";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const USER_REGEX = /^[a-zA-Z0-9._]{8,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = () => {
	const [userForm, setUserForm] = useState<TypeForm>({
		email: "",
		password: "",
		username: "",
		confirmPassword: "",
	});
	const [errMsg, setErrMsg] = useState<string>("");
	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	// const from = location.state?.from?.pathname || "/main";
	const from = "/";

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setUserForm((prevUserForm) => {
			return { ...prevUserForm, [name]: value };
		});
	};

	useEffect(() => {
		setErrMsg("");
	}, [userForm]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const isUserValid = USER_REGEX.test(userForm.username as string);
		const isPassValid = PWD_REGEX.test(userForm.password);

		if (!isUserValid || !isPassValid) {
			setErrMsg("Invalid entry. Please check the form.");
			return;
		}
		const identicalPassword = userForm.password === userForm.confirmPassword;

		if (!identicalPassword) {
			setErrMsg("Password must match");
			return;
		}

		try {
			const data = await register(userForm);
			if (data.ok) {
				setAuth(data.data);
				toast.success("Go!");
			}
			if (!data.ok) {
				toast.error(data.msg);
			}
		} catch (error) {
			console.log(error);
		}
		setUserForm({
			email: "",
			password: "",
			username: "",
			confirmPassword: "",
		});
		navigate(from, { replace: true });
	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h1 className={styles.header1}>Sign up</h1>
				<p className={styles.paragraph}>
					If you already have an account register you can{" "}
					<Link className={styles.link} to={"/login"} state={{ from: location }} replace>
						Login Here !
					</Link>
				</p>
				<GroupForm
					type="email"
					id="email"
					name="email"
					value={userForm["email"]}
					placeholder="Enter your email address"
					handleChange={handleChange}
					icon={<MailOutlineIcon className={styles.icon} sx={{ color: common.white }} />}
				/>
				<GroupForm
					type="username"
					id="username"
					name="username"
					value={userForm["username"] as string}
					placeholder="Enter your username"
					handleChange={handleChange}
					icon={<Person2OutlinedIcon className={styles.icon} sx={{ color: common.white }} />}
				/>
				<GroupForm
					type="password"
					id="password"
					name="password"
					value={userForm["password"]}
					placeholder="Enter your password"
					handleChange={handleChange}
					icon={<LockOutlinedIcon sx={{ color: common.white }} />}
				/>
				<GroupForm
					type="password"
					id="confirmPassword"
					name="confirmPassword"
					value={userForm["confirmPassword"] as string}
					placeholder="Confirm your password"
					handleChange={handleChange}
					icon={<LockOutlinedIcon sx={{ color: common.white }} />}
				/>
				<p className={styles.error}>{errMsg}</p>
				<Button text="Sign up" />
			</form>
			<Toaster />
		</div>
	);
};

export default RegisterForm;
