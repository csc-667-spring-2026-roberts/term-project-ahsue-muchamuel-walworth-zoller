import { Router, Request, Response } from "express";
import db from "../db/connections.js";

const router = Router();

// GET /test -> read all rows
router.get("/", async (_request: Request, response: Response) => {
  try {
    const records = await db.any("SELECT * FROM test_table ORDER BY id ASC");
    response.status(200).json(records);
  } catch (error) {
    console.error("GET /test failed:", error);
    response.status(500).json({ error: "Failed to fetch records" });
  }
});

// POST /test -> insert a new row
router.post("/", async (request: Request, response: Response) => {
  try {
    const { message } = request.body;

    if (!message || typeof message !== "string") {
      response.status(400).json({
        error: "message is required and must be a string",
      });
      return;
    }

    const insertedRecord = await db.one(
      `INSERT INTO test_table (message)
       VALUES ($1)
       RETURNING *`,
      [message],
    );

    response.status(201).json(insertedRecord);
  } catch (error) {
    console.error("POST /test failed:", error);
    response.status(500).json({ error: "Failed to insert record" });
  }
});

export default router;
