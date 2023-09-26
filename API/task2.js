import express from "express";
import authRoutes from "./routes/authRoutes.js";
import { cors } from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/", authRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
