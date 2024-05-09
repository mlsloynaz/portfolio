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
    const { operationResultMessage, errors, name, email, subject, message } = actionResult
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <form ref={formRef} action={(formData) => {
            formAction(formData)
            if (formRef.current)
                formRef.current?.reset()
        }}
        >
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="name" id="name" name="name" defaultValue={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-800 focus:ring-2  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Name LastName" />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email from:</label>
                <input type="email" name="email" id="email" required defaultValue={email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-800 focus:ring-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@domain.com" />
            </div>
            <div className="mb-5">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                <input type="text" name="subject" id="subject" defaultValue={subject} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-800 focus:ring-2  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
            </div>
            <div className="mb-5">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                <textarea id="message" name="message" required defaultValue={message} rows={2} cols={50} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-800 focus:ring-2  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
            </div>
            <div
                className="my-4 flex space-x-1 text-red-500 bg-red-50 rounded-lg"
                aria-live="polite"
                aria-atomic="true"
            >
                {operationResultMessage && (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>

                        <div className="text-sm ">
                            <p className="pb-2">{operationResultMessage}</p>
                            {errors ?
                                <ul>
                                    {errors.map((error) => (
                                        <li key={error}>{error}</li>
                                    ))}
                                </ul> :
                                null
                            }
                        </div>

                    </>
                )}
            </div>
            <SubmitButton label="Submit" />
        </form >
    )
}