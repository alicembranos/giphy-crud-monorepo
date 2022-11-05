export const capitalize = (text: string): string => {
	return text[0].toLocaleUpperCase() + text.substring(1);
};

export const formatGifData = (gifData: any) => {
	return {
		type: gifData.type,
		id: gifData.id,
		url: gifData.url,
		slug: gifData.slug,
		bitly_gif_url: gifData.bitly_gif_url,
		bitly_url: gifData.bitly_url,
		embed_url: gifData.embed_url,
		username: gifData.username,
		source: gifData.source,
		title: gifData.title,
		rating: gifData.rating,
		content_url: gifData.content_url,
		source_tld: gifData.source_tld,
		source_post_url: gifData.source_post_url,
		import_datetime: gifData.import_datetime,
		trending_datetime: gifData.trending_datetime,
		image: gifData.images.fixed_width.url,
		analytics_response_payload: gifData.analytics_response_payload,
		user: gifData.userId,
	};
};
