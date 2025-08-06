import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import Productroutes from "./routes/Product.routes.js";

const app = express();


const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://your-frontend-url.vercel.app" // 🔁 Replace this with your actual deployed frontend URL
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api/products", Productroutes);

// ✅ Server start + DB connect
app.listen(5000, () => {
  connectDB();
  console.log("🚀 Server running at http://localhost:5000");
});
