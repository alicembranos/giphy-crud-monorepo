import { IGif } from "interfaces/gif.interface";
import { model, Schema } from "mongoose";

const GifSchema = new Schema<IGif>({
	type: {
		type: String,
	},
	_id: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
	},
	bitly_gif_url: {
		type: String,
		required: true,
	},
	bitly_url: {
		type: String,
		required: true,
	},
	embed_url: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	source: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	rating: {
		type: String,
		required: true,
	},
	content_url: {
		type: String,
		required: true,
	},
	source_tld: {
		type: String,
		required: true,
	},
	source_post_url: {
		type: String,
		required: true,
	},
	import_datetime: {
		type: String,
		required: true,
	},
	trending_datetime: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	analytics_response_payload: {
		type: String,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
});

const GifModel = model<IGif>("Gif", GifSchema);

export default GifModel;
