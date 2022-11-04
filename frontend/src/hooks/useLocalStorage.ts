import { useState, useEffect } from "react";

const useLocalStorage = <T>(key: string, initialValue?: T ) => {
	const [state, setState] = useState<T>(() => {
		if (!initialValue) return;
		try {
			const value = localStorage.getItem(key);
			return value ? JSON.parse(value) : initialValue;
		} catch (err) {
			return initialValue;
		}
	});

	useEffect(() => {
		if (state) {
			try {
				localStorage.setItem(key, JSON.stringify(state));
			} catch (error) {
				console.log(error);
			}
		}
	}, [key, state]);

	return [state, setState] as const;
};

export default useLocalStorage;
