import express, {Express, Request, Response} from "express";
import productRoutes from "./routes/product.routes"
import cors from "cors" ;
import contactRoutes from "./routes/contact.routes";

// 1. initialize the express app
const app:Express = express();

// 2. define middlewares
// Instruct to parse the request payload data to be converted to JSON
app.use(express.json());

const allowedOrigins =["http://localhost:5173"];

// app.use(cors()) //enable cors
const corsOptions={
    origin:(origin:string | undefined ,
            callback:(err: Error | null,
                      allow?: boolean)=>void)=>{
        if (!origin || allowedOrigins.includes(origin)){
            callback(null,true)
        }else {
            callback(new Error("Not allowed by CORS"))
        }
    }
}
app.use(cors())
app.use("/api/products",productRoutes)
app.use("/api/contacts",contactRoutes)


// 3. Define a simple HTTP get request
/*
app.get('/',(req:Request,res:Response)=>{
    console.log(req.body);
    res.send('Hello World..!')
})
*/

export default app