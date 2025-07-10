import {Router} from "express";
import {
    deleteProduct,
    getAllProducts,
    getProductById,
    saveProduct,
    updateProduct
} from "../controllers/product.controller";

const productRouter : Router=Router();

//handle requests
productRouter.get("/all",getAllProducts);  //get all products
productRouter.post("/save",saveProduct); //save a product
productRouter.get("/:id",getProductById); //get product by id
productRouter.put("/update/:id",updateProduct); //update product
productRouter.delete("/delete/:id",deleteProduct); //delete product

export default productRouter;