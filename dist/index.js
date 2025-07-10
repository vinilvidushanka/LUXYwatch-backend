"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// 1. initialize the express app
const app = (0, express_1.default)();
// 2. define the application port
const port = 3000;
// 3. Define a simple HTTP get request
app.get('/', (req, res) => {
    res.send('Hello World........sfdvdgbzs');
});
// 4. Instruct the express app to listen on port 3000
app.listen(port, () => {
    console.log(`Example app listening on port at http://localhost:${port}`);
});
