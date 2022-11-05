import { API_URL_GIF } from "./settings";
export interface IGif {
	type: string;
	_id: string;
	url: string;
	slug: string;
	bitly_gif_url: string;
	bitly_url: string;
	embed_url: string;
	username: string;
	source: string;
	title: string;
	rating: string;
	content_url: string;
	source_tld: string;
	source_post_url: string;
	import_datetime: string;
	trending_datetime: string;
	image: string;
	analytics_response_payload: string;
	user: IUser;
}

interface IUser {
	username: string;
	email: string;
	password: string;
	image?: string;
}

type UploadGifProps = {
	jwt: string;
	gif: IGif;
};

const uploadGif = async ({ gif, jwt }: UploadGifProps) => {
	console.log({ ...gif });
	return fetch(`${API_URL_GIF}`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${jwt}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...gif,
		}),
	}).then((res) => {
		return res.json();
	});
};

const deleteGif = async (id: string) => {
	return fetch(`${API_URL_GIF}/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	}).then((res) => {
		return res.json();
	});
};

export { uploadGif, deleteGif };
