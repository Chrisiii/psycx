import { Router } from "express";
import { pool } from "../db";

const router = Router();

router.get("/products", async (req, res) => {
  const { search } = req.query;

  let query = "SELECT * FROM products";
  const values: any[] = [];

  if (search) {
    query += " WHERE name ILIKE $1";
    values.push(`%${search}%`);
  }

  try {
    const result = await pool.query(query, values);
    res.json({ items: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
