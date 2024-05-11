"use client"

import { createContactMe, ContactFormState } from "@/actions/create-contact-me";
import { useFormState } from "react-dom";

import { SubmitButton } from "./submitButton";
import FormResultStatus from "./form-result-status";
import {ContactMe as t} from  '@/utils/resourceContent';

const initialState: ContactFormState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    resetKey:'',
};

export function ContactMeForm() {
    const [actionResult, formAction] = useFormState(createContactMe, initialState);
    const { result, errors, name, email, subject, message, resetKey } = actionResult

    const inputClass = "p-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-800 focus:ring-2  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
    const errorClass = "border border-red-700 bg-red-50"

    return (
        <form action={formAction} key={resetKey} >
            <div className="mb-5 flex flex-col">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t.nameLbl}</label>
                <input type="text" id="name" name="name" defaultValue={name} className={`${inputClass} ${errors?.name ? errorClass : ""}`} placeholder={t.namePlaceholder} />
                {errors?.name ? <span className="text-sm text-red-700">{errors?.name[0]}</span> : null}
            </div>
            <div className="mb-5 flex flex-col">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t.emailLbl}</label>
                <input type="email" name="email" id="email" defaultValue={email} className={`${inputClass} ${errors?.email ? errorClass : ""}`} placeholder={t.emailPlaceholder} />
                {errors?.email ? <span className="text-sm text-red-700">{errors.email[0]}</span> : null}
            </div>
            <div className="mb-5 flex flex-col">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t.subjectLbl}</label>
                <input type="text" name="subject" id="subject" defaultValue={subject} className={`${inputClass} ${errors?.subject ? errorClass : ""}`} />
                {errors?.subject ? <span className="text-sm text-red-700">{errors.subject[0]}</span> : null}
            </div>
            <div className="mb-5 flex flex-col">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                <textarea id="message" name="message" defaultValue={message} rows={2} cols={50} className={`${inputClass}  ${errors?.message ? errorClass : ""}`} />
                {errors?.message ? <span className="text-sm text-red-700">{errors.message[0]}</span> : null}
            </div>
            {result?<FormResultStatus  type={result.type} message={result.message} />:null}
            <SubmitButton label="Submit" />
        </form >
    )
}