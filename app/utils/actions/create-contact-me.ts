"use server";

import prisma from "@/db";
import {ZodError, z} from "zod";

export type ContactFormState = {
        name?:string;
        email:string;
        subject?:string;
        message: string;
        errors?: string[];
        operationResultMessage?:string;
};

export async function createContactMe(
    prevState: ContactFormState,
    formData: FormData,
) {
    const email = formData.get('email');
    const message = formData.get('message');
    const name = formData.get('name');
    const subject = formData.get('subject');

    const mySchema = z.object({
        email: z.coerce.string().min(1, "The email is required").email("The email is invalid"),
        message: z.coerce.string().min(1, "The message is required"),
        name: z.coerce.string(),
        subject: z.coerce.string()
    });
    let validator
  
    try{
        validator= mySchema.parse({
            email: email,
            message: message,
            name: name,
            subject: subject,
        });
    }catch(error){
        console.log(error)
        if (error instanceof ZodError) {
            console.log({ validationErrors: error.errors });
            return {
                ...prevState,
                errors: error.errors.map((err) =>
                    err.message as string
                ),
                operationResultMessage: 'Error validation',
            };
        }
    }
    if(!validator) return{
            ...prevState,
            operationResultMessage: "Validation error"
    }

    try {
        await prisma.contactMe.create({
            data:{
                email: validator.email,
                message: validator.message,
                subject: validator.subject,
                name: validator.name ,
            }
        });
        return {
            ...prevState,
            errors:[],
            operationResultMessage: ""
        };
    } catch (error) {
        console.log(error);
        return {
            ...prevState,
            operationResultMessage: "Server error"
        };
    }
}

