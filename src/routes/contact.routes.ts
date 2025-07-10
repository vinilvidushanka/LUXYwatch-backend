import {Router} from "express";
import { saveContact } from "../controllers/contact.controller";
const contactRouter : Router=Router();

contactRouter.post("/save",saveContact);

export default contactRouter