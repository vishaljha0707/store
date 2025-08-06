import express from "express";
import cors from "cors"; // 
import { connectDB } from "./config/db.js";
import Productroutes from "./routes/Product.routes.js";


const app = express();

// ✅ Middleware
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api/products", Productroutes);

// ✅ Server start + DB connect
app.listen(5000, () => {
  connectDB();
  console.log("🚀 Server running at http://localhost:5000");
});
