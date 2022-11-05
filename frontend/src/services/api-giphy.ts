import { API_GIPHY, API_GIPHY_KEY } from "./settings";

type ServiceGifProps = {
	limit?: number;
	rating?: string;
	keyword?: string;
	page?: number;
};

const getGifsFromApi = async ({
	limit = 30,
	rating = "g",
	keyword = "",
	page = 0,
}: ServiceGifProps) => {
	const apiURL = `${API_GIPHY}/gifs/search?api_key=${API_GIPHY_KEY}&q=${keyword}&limit=${limit}&offset=${
		page * limit
	}&rating=${rating}$lang=en`;

	return fetch(apiURL).then((res) => {
		return res.json();
	});
};

const getTrendingGifs = async () => {
	const apiURL = `${API_GIPHY}/trending/searches?api_key=${API_GIPHY_KEY}`;

	return fetch(apiURL).then((res) => {
		return res.json();
	});
};

const getGifById = async (id:string) => {
	const apiURL = `${API_GIPHY}/gifs/${id}?api_key=${API_GIPHY_KEY}`;

	return fetch(apiURL).then((res) => {
		return res.json();
	});
}
export { getGifsFromApi, getTrendingGifs, getGifById };
