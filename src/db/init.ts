import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import db from "./connections.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function initializeDatabase(): Promise<void> {
  try {
    const initSql = readFileSync(path.join(__dirname, "../../database/init.sql"), "utf-8");
    await db.none(initSql);
    console.log("✓ Database initialized successfully");
  } catch (error) {
    console.error("✗ Database initialization failed:", error);
    throw error;
  }
}

export default initializeDatabase;
