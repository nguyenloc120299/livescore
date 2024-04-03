import mongoose from "mongoose";

const DATABASE_URL=process.env.MONGODB_URI as string

const connectDB = async () => {
  if(mongoose.connections[0].readyState){
    return true;
  }

  try {
    await mongoose.connect(DATABASE_URL);
    console.log('Mongodb connected')
    return true;
  } catch (error) {
    console.log(error)
  }
}

export default connectDB;


