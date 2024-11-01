import { Router } from "express";
import {
    getALLProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct

} from "../controllers/productController";

const router = Router();

router.get("products/", getALLProducts); // Trae todos los productos
router.get("products/:id", getProductByID); // Trae un solo producto
router.post("products/", createProduct); // Crear un producto
router.put("products/:id", updateProduct); // Actualizar un producto
router.delete("product/:id", deleteProduct); // Borrar un producto

export default router;
