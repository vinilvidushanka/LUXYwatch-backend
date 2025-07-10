import {contactList} from "../db/db";
import {Contact} from "../model/contact.model";

export const saveContact = (contact:Contact) :Contact => {
    contactList.push(contact);
    return contact;
}

export const validateContact = (contact:Contact) => {
    if (!contact.name || !contact.email || !contact.message) {
        return "All fields are required";
    }
    return null;
}