const app = require("./app");
const dotenv = require("dotenv"); //Env file ko connect krne ke liye
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

//json mein Scripts mein nodemon ki scrip add krna
//Nodemon is used to detect any changes in the server and will itself restart the server to reflet changes

//Connecting config env file
dotenv.config({ path: "backend/config/config.env" });

//Handling Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down due to Uncaught Exception`);
  server.close(() => {
    process.exit(1);
  });
});

//connecting to database
connectDatabase();

//Connecting to cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shuttting down due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
