import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

const URI = process.env.MONGODB_URI;

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(URI);
		console.log(`App connected to MongoDB: ${conn.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit(1);
	}
};
