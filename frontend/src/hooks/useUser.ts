import { useState, useEffect } from "react";

const useUser = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("auth") as string));

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("auth") as string));
	}, []);

	return user;
};

export default useUser;
