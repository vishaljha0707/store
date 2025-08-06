import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://vishaljha154:IQnazsa2M7hEvZ3h@cluster0.8scdhwn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	
		
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // process code 1 code means exit with failure, 0 means success
	}
};
