import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface AuthI {
	jwt: string;
	username: string;
	id: string;
}

type AuthContextType = {
	auth: AuthI | undefined;
	setAuth:
		| React.Dispatch<React.SetStateAction<AuthI>>
		| React.Dispatch<React.SetStateAction<undefined>>;
};

type Props = {
	children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: Props) => {
	const [auth, setAuth] = useLocalStorage("auth", undefined);

	return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
