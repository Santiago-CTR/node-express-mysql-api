import { Router } from "express";
import { success, error } from "../../network/responses.js";
import { getAll, getById } from "./controller.js";

const router = Router();

router.get("/", (req, res) => {
  success(req, res, "Welcome", 200);
});

export default router;
