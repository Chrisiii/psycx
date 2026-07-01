import { Router } from "express";
import { pool } from "../db";

const router = Router();

router.get("/products", async (req, res) => {
  const { search, page = "1", limit = "12" } = req.query;

  const pageNum = Math.max(1, parseInt(page as string, 10) || 1);
  const limitNum = Math.min(
    100,
    Math.max(1, parseInt(limit as string, 10) || 12),
  );
  const offset = (pageNum - 1) * limitNum;

  const values: any[] = [];
  const conditions: string[] = [];

  if (search) {
    conditions.push(`name ILIKE $${values.length + 1}`);
    values.push(`%${search}%`);
  }
  const whereClause = conditions.length
    ? ` WHERE ${conditions.join(" AND ")}`
    : "";

  const query =
    `SELECT * FROM products${whereClause} ORDER BY id` +
    ` LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;

  const countQuery = `SELECT COUNT(*)::int AS count FROM products${whereClause}`;

  try {
    const [result, countResult] = await Promise.all([
      pool.query(query, [...values, limitNum, offset]),
      pool.query(countQuery, values),
    ]);

    const totalItems = countResult.rows[0].count;
    const totalPages = Math.max(1, Math.ceil(totalItems / limitNum));

    res.json({
      items: result.rows,
      pagination: { page: pageNum, limit: limitNum, totalItems, totalPages },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
