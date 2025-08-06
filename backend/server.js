import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import Productroutes from "./routes/Product.routes.js";

const app = express();


app.use(cors({
  origin: "https://store-eight-dun.vercel.app", // your frontend vercel URL
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/products", Productroutes);

app.listen(5000, () => {
  connectDB();
  console.log("🚀 Server running at http://localhost:5000");
});
