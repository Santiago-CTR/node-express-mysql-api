import { Router } from "express";
import { success, error } from "../../network/responses.js";
import { getAll, getById, deleteRow } from "./controller.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const all = await getAll();
    success(req, res, all, 200);
  } catch (err) {
    error(req, res, err, 500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const row = await getById(req.params.id);
    success(req, res, row, 200);
  } catch (err) {
    error(req, res, err, 500);
  }
});

router.delete("/", async (req, res) => {
  try {
    const row = await deleteRow(req.query);
    success(req, res, row, 200);
  } catch (err) {
    error(req, res, "Error al Eliminar Elemento");
  }
});
export default router;
