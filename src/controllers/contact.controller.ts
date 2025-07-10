import {Request,Response} from "express";
import *as contactService from "../services/contact.service";

export const saveContact =  (req:Request,res:Response) => {
    try {
        const newContact = req.body;
        const validationError = contactService.validateContact(newContact);
        if (validationError) {
            res.status(400).json({error:validationError});
            return;
        }
        const savedContact = contactService.saveContact(newContact);
        res.status(201).json(savedContact);
    }catch (error) {
        console.error(error);
        res.status(500).json({error:"Something went wrong"});
    }
}