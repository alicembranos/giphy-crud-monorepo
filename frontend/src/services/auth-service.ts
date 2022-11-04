import { API_URL_USERS } from "./settings";
import { TypeForm } from "../types/types";

const login = async ({ ...userForm }: TypeForm) => {
	const { email, password } = userForm;
	return fetch(`${API_URL_USERS}/signIn`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	}).then((res) => {
		return res.json();
	});
};

const register = async ({ ...userForm }: TypeForm) => {
	const { email, password, username } = userForm;
	return fetch(`${API_URL_USERS}/signUp`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
			username,
		}),
	}).then((res) => {
		return res.json();
	});
};

export { register, login };
