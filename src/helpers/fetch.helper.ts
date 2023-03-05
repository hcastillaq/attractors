interface FetchConfig {
	method: string;
	body?: any;
}

export const FETCH = async (url: string, config: FetchConfig) => {
	return await fetch(url, {
		method: config.method,
		headers: {
			"Content-Type": "application/json",
		},
		body: config.body ? JSON.stringify(config.body) : null,
	}).then((res) => res.json());
};
