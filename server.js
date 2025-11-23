import express from "express";
import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());

connectDB();

app.use("/book", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

export default app;
