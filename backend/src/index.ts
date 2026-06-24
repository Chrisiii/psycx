import express from "express";
import cors from "cors";
import { pool } from "./db";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/products", async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
});

app.get("/api/categories", async (req, res) => {
  const result = await pool.query("SELECT * FROM categories");
  res.json(result.rows);
});

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));
