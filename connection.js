const mongoose = require("mongoose");
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error(" MongoDB connection failed :\n", error.message);
  }
};

module.exports = connectToMongoDB;
