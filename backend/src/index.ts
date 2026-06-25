import express from "express";
import cors from "cors";
import productsRouter from "./routes/products";
import categoriesRouter from "./routes/categories";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", productsRouter);
app.use("/api", categoriesRouter);

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));
