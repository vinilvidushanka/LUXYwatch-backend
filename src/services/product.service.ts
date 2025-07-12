// import {Product} from "../model/product.model";
import Product from "../model/product.model";
import {ProductDto} from "../dto/product.dto";
export const getAllProducts = async () :Promise<ProductDto[]> => {
    // return productList;
    return Product.find();
}

export const saveProduct = async (product:ProductDto) :Promise<ProductDto> => { //:Product -> product type ekak return krnw kiyl pennanw
    /*productList.push(product);
    return product;*/
    return Product.create(product);
}

export const getProductById = async (id:number) :Promise<any>  => {
    // return productList.find(product => product.id === id);
    Product.findOne({id});
}

export const updateProduct =async (id:number,data:ProductDto)  => {
    /*const product = productList.find(product => product.id === id);
    if(!product){
        return null;
    }
    Object.assign(product,data);
    return product;*/
    const product =await Product.findOneAndUpdate({id},data,{new:true});
    if (!product){
        return null;
    }
    return product
}

export const deleteProduct = async (id:number) => {
    /*const index=productList.findIndex(product => product.id === id);
    if(index === -1){
        return false;
    }
    productList.splice(index,1);
    return true;*/
    await Product.deleteOne({id:id});
    return true;
}

export const validateProduct = async (product:ProductDto):Promise<string|null> => {
    /*if (!product.id || !product.name || !product.price || !product.currency || !product.image) {
        return "All fields are required";
    }
    return null;*/
    if (!product.id || !product.name || !product.price || !product.currency || !product.image) {
        return "All fields are required";
    }
    return null
}