"use server";

import prisma from "@/db";
import { z } from "zod";
import { EmailData, ResultType, ResultTypeEnum } from "@/definitions/contactMeTypes";
import { sendEmailToMe, sendEmailToUser } from "@/utils/email/sendEmail";

export type ContactFormState = EmailData & {
    resetKey:string
    errors?:{
        name?: string[] ;
        email?: string[] ;
        subject?: string[];
        message?: string[];
    };
    result?:{type:ResultType , message:string};
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
            result:{message: 'Error validation', type:ResultTypeEnum.ERROR},
        };
    }

    const emailPayloadToMe = {
        email: validatedFields.data.email,
        message: validatedFields.data.message,
        subject: validatedFields.data.subject,
        name: validatedFields.data.name,
    }
    let errorSendingEmails=false;

    try {
        const emailPayloadToUser= {
            email: validatedFields.data.email,
            message: "received", // this ios not supposed to be displayed, html created instead
            subject: "Thank you for contacting me!",
            name: validatedFields.data.name
        }
        await sendEmailToMe(emailPayloadToMe)

        await sendEmailToUser(emailPayloadToUser)

    } catch (error) {
        console.log(error)
        errorSendingEmails=true;
    }

    if(errorSendingEmails){
        try{
            await prisma.contactMe.create({
                data : {...emailPayloadToMe}
            });
            return {
                ...prevState,
                errors:{},
                result:{message: 'Info has been saved, you will receive a the next 24h', type:ResultTypeEnum.SUCCESS},
                resetKey:validatedFields.data.email
            }
        }catch(error){
            console.log(error)
            return {
                ...prevState,
                result:{message: 'Error sending email and saving info, please try again later or use another way', type:ResultTypeEnum.ERROR}
            };
        }
    }

    return {
        ...prevState,
        errors:{},
        result:{message: 'Email has been sent', type:ResultTypeEnum.SUCCESS},
        resetKey:validatedFields.data.email
    }
}

