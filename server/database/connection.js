const mongoose = require('mongoose');
// const MONGO_URL="mongodb+srv://admin:prince2002@cluster0.4qsy1ey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB=async()=>{
    try{
        //mongodb connection string
        const con= await mongoose.connect("mongodb://localhost:27017/school",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        
        console.log(`MongoDB connected:${con.connection.host}`);

    }catch(err){
         console.log(err);
         process.exit(1);
    }
}
// const connectDB = async () => {
//     try {
//         const uri = "mongodb://localhost:27017/hotels";     //process.env.mongoUrl;
//         if (!uri) {
//             throw new Error('mongoUrl is not defined');
//         }
//         await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected successfully');
//     } catch (err) {
//         console.error('Failed to connect to MongoDB', err.message);
//         process.exit(1);
//     }
// };

module.exports=connectDB