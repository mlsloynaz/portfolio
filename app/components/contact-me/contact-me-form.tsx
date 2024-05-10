"use client"

import { createContactMe, ContactFormState } from "@/actions/create-contact-me";
import { useFormState } from "react-dom";

import { SubmitButton } from "./submitButton";
import { useRef } from "react";

const initialState: ContactFormState = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

export function ContactMeForm() {
    const [actionResult, formAction] = useFormState(createContactMe, initialState);
    const { operationResultMessage, errors, name, email: email, subject, message } = actionResult
    const formRef = useRef<HTMLFormElement>(null);

    const inputClass = "p-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-800 focus:ring-2  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
    const errorClass = "border border-red-700 bg-red-50"
    return (
        <form ref={formRef} action={(formData) => {
            formAction(formData)
            if (formRef.current)
                formRef.current?.reset()
        }}
        >
            <div className="mb-5 flex flex-col">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="name" id="name" name="name" defaultValue={name} className={`${inputClass} ${errors?.name ? errorClass : ""}`} placeholder="Name LastName" />
                {errors?.name ? <span className="text-sm text-red-700">{errors?.name[0]}</span> : null}
            </div>
            <div className="mb-5 flex flex-col">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <input type="email" name="email" id="email" defaultValue={email} className={`${inputClass} ${errors?.email ? errorClass : ""}`} placeholder="name@domain.com" />
                {errors?.email ? <span className="text-sm text-red-700">{errors.email[0]}</span> : null}
            </div>
            <div className="mb-5 flex flex-col">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                <input type="text" name="subject" id="subject" defaultValue={subject} className={`${inputClass} ${errors?.subject ? errorClass : ""}`} />
                {errors?.subject ? <span className="text-sm text-red-700">{errors.subject[0]}</span> : null}
            </div>
            <div className="mb-5 flex flex-col">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                <textarea id="message" name="message" defaultValue={message} rows={2} cols={50} className={`${inputClass}  ${errors?.message ? errorClass : ""}`} />
                {errors?.message ? <span className="text-sm text-red-700">{errors.message[0]}</span> : null}
            </div>
            {operationResultMessage ? (
                <div
                    className="my-4 p-2 flex space-x-1 text-red-700 bg-red-50 rounded-lg items-center"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                    <p>{operationResultMessage}</p>
                </div>
            ):null}
            <SubmitButton label="Submit" />
        </form >
    )
}