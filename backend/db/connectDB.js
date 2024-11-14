import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected: ");
  } catch (error) {
    console.log("error in connectiong db",error.message);
    process.exit(1);
  }
};
