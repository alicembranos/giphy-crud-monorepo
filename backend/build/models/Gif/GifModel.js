"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GifSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
});
const GifModel = (0, mongoose_1.model)("Gif", GifSchema);
exports.default = GifModel;
