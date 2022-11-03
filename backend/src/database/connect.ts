import config from "../config/config";
import mongoose, { Mongoose } from "mongoose";

const MONGO_DB_URI = config.db.url || "";

function connect(): Promise<Mongoose> {
	return mongoose.connect(MONGO_DB_URI);
}

export default connect;