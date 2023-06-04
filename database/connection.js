import mongoose from "mongoose";

const mongoConnection = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);

    if (connection.readyState == 1) {
      console.log("Connected");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default mongoConnection;
