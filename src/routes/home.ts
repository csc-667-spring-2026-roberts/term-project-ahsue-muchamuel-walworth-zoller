import { Router } from "express";

const router = Router();

router.get("/", (_request, response) => {
  response.send("<h1>It works!</h1>");
});

export default router;
