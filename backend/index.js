import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";
import { connectDB } from "./config/connect.js";
import postRouter from "./apis/postApis.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.get("/", (req, res) => {
    res.send("server running");
});

app.use("/apis/product", postRouter);

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
    console.log(`server run on port ${PORT}`);
});