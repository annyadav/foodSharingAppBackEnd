const mongoose = require("mongoose");

const uri =
  "mongodb+srv://anuyadav:anu123@cluster0.0rftkxy.mongodb.net/foodsharing?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    // Connect with the database...
   
    const connect = await mongoose.connect(uri);
    await sleep(4000); // Wait for 2000 milliseconds (2 seconds)
    console.log(
      "Database connected successfully...",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = connectDB;
