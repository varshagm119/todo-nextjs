import mongoose from "mongoose";

const connect = async () => {

    try {
       // await mongoose.connect(process.env.MONGO)

       await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //dbName: process.env.DB_NAME, // Add this line
      });
      console.log("Connected to MongoDB");
    }
    catch (error){
        handleError(error)
    }
}

export default connect;