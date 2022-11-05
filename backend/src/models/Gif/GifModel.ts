import { IGif } from "interfaces/gif.interface";
import { model, Schema } from "mongoose";

const GifSchema = new Schema<IGif>({
	type: {
		type: String,
	},
	id: {
		type: String,
	},
	url: {
		type: String,
	},
	slug: {
		type: String,
	},
	bitly_gif_url: {
		type: String,
	},
	bitly_url: {
		type: String,
	},
	embed_url: {
		type: String,
	},
	username: {
		type: String,
	},
	source: {
		type: String,
	},
	title: {
		type: String,
	},
	rating: {
		type: String,
	},
	content_url: {
		type: String,
	},
	source_tld: {
		type: String,
	},
	source_post_url: {
		type: String,
	},
	import_datetime: {
		type: String,
	},
	trending_datetime: {
		type: String,
	},
	image: {
		type: String,
	},
	analytics_response_payload: {
		type: String,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
});

const GifModel = model<IGif>("Gif", GifSchema);

export default GifModel;
