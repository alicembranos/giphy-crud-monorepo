import GroupForm from "../GroupForm/GroupForm";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { common } from "@mui/material/colors";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { TypeForm } from "../../types/types";
import { login } from "../../services/auth-service";
import toast, { Toaster } from "react-hot-toast";
import styles from "./styles.module.css";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
	const [userForm, setUserForm] = useState<TypeForm>({
		email: "",
		password: "",
	});
	const [errMsg, setErrMsg] = useState<string>("");
	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	// const from = location.state?.from?.pathname || "/main";
	const from = "/main";

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
		if (!userForm.email || !userForm.password) {
			setErrMsg("Invalid entry");
			return;
		}

		try {
			const data = await login(userForm);
			console.log(data)
			if (data.ok) {
				setAuth(data.data);
				toast.success("hubo exito!");
				navigate(from, { replace: true });
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
		});

	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h1 className={styles.header1}>Sign in</h1>
				<p className={styles.paragraph}>
					If you don't have an account register you can{" "}
					<Link className={styles.link} to={"/register"} state={{ from: location }} replace>
						Register Here !
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
					type="password"
					id="password"
					name="password"
					value={userForm["password"]}
					placeholder="Enter your password"
					handleChange={handleChange}
					icon={<LockOutlinedIcon sx={{ color: common.white }} />}
				/>
				<p className={styles.error}>{errMsg}</p>
				<Button text="Login" />
			</form>
			<Toaster />
		</div>
	);
};

export default LoginForm;
