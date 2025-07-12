import app from "./app";
import dotenv from "dotenv";
import DBConnection from "./db/DBConnection";

dotenv.config();//load all the environment variables from the .env file

// 2. define the application port
const port = process.env.PORT || 3000; // access the port from the .env file

DBConnection().then(result=>console.log(result));

// 4. Instruct the express app to listen on port 3000
app.listen(port,()=>{
    console.log(`Example app listening on port at http://localhost:${port}`)
})