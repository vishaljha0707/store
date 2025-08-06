import express from "express";

import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/Product.controllers.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getProductById); 

export default router;
