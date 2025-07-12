import { Request, Response } from "express";
import *as productService from "../services/product.service"

//Controller function to handle get all products
export const getAllProducts = async (req:Request, res:Response) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    }catch (error){
        console.error(error)
        res.status(500).json({
            error:"Something went wrong"
        })
    }
}

export const saveProduct = async (req:Request, res:Response) => {
    try {
        const newProduct =req.body;
        const validationError = await productService.validateProduct(newProduct)
        if (validationError){
            res.status(400).json({
                error:validationError
            });
            return;
        }
        const savedProduct = await productService.saveProduct(newProduct);
        res.status(201).json(savedProduct);
    }catch (error){
        console.error(error)
        res.status(500).json({
            error:"Something went wrong"
        })
    }
}

export const getProductById = async (req:Request, res:Response) => {
    const productId = parseInt(req.params.id);
    if (isNaN(productId)){
        res.status(400).json({
            error:"Invalid product id"
        });
        return;
    }
    const product = await productService.getProductById(productId)
    if (!product){
        res.status(404).json({
            error:"Product not found"
        });
        return;
    }
    res.status(200).json(product);
}

export const updateProduct = async (req:Request, res:Response) => {
    const productId = parseInt(req.params.id);
    if(isNaN(productId)){
        res.status(400).json({error:"Invalid product id"
        });
        return;
    }
    const updateData = req.body;
    const updatedProduct = await productService.updateProduct(productId,updateData);
    if(!updatedProduct){
        res.status(404).json({error:"Product not found"});
        return;
    }
    res.status(200).json(updatedProduct);
}

export const deleteProduct = async (req:Request, res:Response) => {
    const productId = parseInt(req.params.id);
    if(isNaN(productId)){
        res.status(400).json({error:"Invalid product id"
        });
        return;
    }
    const deletedProduct = await productService.deleteProduct(productId);
    if (!deletedProduct){
        res.status(404).json({error:"Product not found"
        });
        return;
    }
    res.status(200).json({message:"Product deleted successfully"});
}