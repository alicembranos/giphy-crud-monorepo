type ConfigOptions = {
	app: {
		PORT: string | number;
		PRIVATE_KEY: string | undefined;
		PRIVATE_EXPIRATION_TIME: string | undefined;
	};
	logger: {
		warn: (message: string) => void;
		info: (message: string) => void;
		error: (message: string) => void;
		trace: (message: string) => void;
		debug: (message: string) => void;
	};
	db: {
		url: string | undefined;
	};
};

export type GenericConfig = {
	[key: string]: ConfigOptions;
	production: ConfigOptions;
	test: ConfigOptions;
	development: ConfigOptions;
};
