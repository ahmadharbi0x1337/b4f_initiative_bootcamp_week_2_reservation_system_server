import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await connectDB();
  console.log("Server is running on http://localhost:" + PORT);
});
