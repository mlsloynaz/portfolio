"use server";

import prisma from "@/db";
import { z } from "zod";
import { EmailData, ResultType, ResultTypeEnum } from "@/definitions/contactMeTypes";
import { sendEmailToMe, sendEmailToUser } from "@/utils/email/sendEmail";
import {ContactMe as t} from  '@/utils/resourceContent';

export type ContactFormState = EmailData & {
    resetKey:string
    resetError:number  // To fix A11y , it allows to announce the error after the spinner finishes.
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
        email: z.coerce.string().min(1, t.errors.emailRequired).email(t.errors.emailInvalid),
        message: z.coerce.string().min(1,t.errors.messageRequired),
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
            result:{message: t.resultMessage.validationError, type:ResultTypeEnum.ERROR},
            resetError: prevState.resetError+1
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
            message: "",
            subject: t.emailContent.toUserSubject,
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
                result:{message: t.resultMessage.infoSent, type:ResultTypeEnum.SUCCESS},
                resetKey:validatedFields.data.email
            }
        }catch(error){
            console.log(error)
            return {
                ...prevState,
                result:{message: t.resultMessage.errorSendingEmail, type:ResultTypeEnum.ERROR}
            };
        }
    }

    return {
        ...prevState,
        errors:{},
        result:{message: t.resultMessage.emailSent, type:ResultTypeEnum.SUCCESS},
        resetKey:validatedFields.data.email
    }
}

