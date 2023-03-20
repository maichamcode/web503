

import express from "express"
import { create, getAll, getOne, remove, update } from "../controller/product";

const router = new express.Router();

router.post("/products/add", create)
router.delete("/products/:id", remove)
router.put("/products/:id", update)
router.get("/products", getAll)
router.get("/products/:id", getOne)


export default router