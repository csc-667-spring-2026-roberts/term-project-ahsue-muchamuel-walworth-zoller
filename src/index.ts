import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import homeRoutes from "./routes/home.js";
import loggingMiddleware from "./middleware/logging.js";

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
//--- Middleware ---
app.use(express.json()); // parse JSON bodies
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(express.static(path.join(__dirname, "..", "public"))); // serve static files
// --- Logging (we'll extract this to middleware/ later) ---
app.use(loggingMiddleware);
app.use("/", homeRoutes);
// --- Routes ---

// --- Start ---
app.listen(PORT, () => {
  console.log(`Server running on http:localhost:${String(PORT)}`);
});
