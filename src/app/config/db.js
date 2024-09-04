// import mongoose from "mongoose";

// const connection = process.env.DB_HOST;

// // Exporting the promise returned by mongoose.connect
// const dbconnect = mongoose.connect(connection);

// // Adding event listeners to handle connection events
// mongoose.connection.on("connected", () => {
//   console.log("Database connected successfully");
// });

// mongoose.connection.on("error", (err) => {
//   console.error("Database connection error:", err);
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("Database disconnected");
// });
// export default dbconnect;

import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}
