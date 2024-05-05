"use client"

import { createContactMe } from "@/actions/create-contact-me";
import { useFormState } from "react-dom";

export function ContactMeForm() {
    const initialState = { errors: {}, data: {} };

    const [{errors, data}, formAction] = useFormState(createContactMe, initialState);

    return (
        <form className="" action={formAction}>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="name" id="name" name="name" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-800 focus:ring-2  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Name LastName"  />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email from:</label>
                <input type="email" name="email" id="email" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-800 focus:ring-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@domain.com" />
            </div>
            <div className="mb-5">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                <input type="text" name="subject" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-800 focus:ring-2  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
            </div>
            <div className="mb-5">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                <textarea id="message" name="message" required rows={2} cols={50} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-800 focus:ring-2  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form >
    )
}