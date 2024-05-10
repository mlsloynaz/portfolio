"use server";

import prisma from "@/db";
import { z} from "zod";
import { EmailData } from "@/definitions/contactMeTypes";
import { sendEmailToMe, sendEmailToUser } from "@/utils/email/sendEmail";

export type ContactFormState = EmailData & {
        errors?:{
            name?: string[] ;
            email?: string[] ;
            subject?: string[];
            message?: string[];
        };
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


    const validatedFields= mySchema.safeParse({
        email: email,
        message: message,
        name: name,
        subject: subject,
    });

    if(!validatedFields.success){
        return {
            ...prevState,
            errors: validatedFields.error.flatten().fieldErrors,
            operationResultMessage: 'Error validation',
        };
    }

    try {
        const emailPayloadToMe = {
            email: validatedFields.data.email,
            message: validatedFields.data.message,
            subject: validatedFields.data.subject,
            name: validatedFields.data.name,
        }

        const emailPayloadToUser= {
            email: validatedFields.data.email,
            message: "received", // this ios not supposed to be displayed, html created instead
            subject: "Thank you for contacting me!",
            name: validatedFields.data.name
        }

        await prisma.contactMe.create({
            data : {...emailPayloadToMe}
        });

        await sendEmailToMe(emailPayloadToMe)

        await sendEmailToUser(emailPayloadToUser)

        return {
            ...prevState,
            errors:{},
            operationResultMessage: "Email has been sent"
        };
    } catch (error) {
        return {
            ...prevState,
            operationResultMessage: "Submit error"
        };
    }
}

