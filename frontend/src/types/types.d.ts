export type InputProps = {
	id: string;
	type: string;
	name: string;
	value: string;
	placeholder: string;
	handleChange: (e: any) => any;
	icon: any;
};

export type TypeForm = {
	email: string;
	password: string;
	username?: string;
	confirmPassword?: string;
};
