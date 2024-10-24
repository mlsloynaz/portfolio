'use client';

import { createContactMe, ContactFormState } from '@/actions/create-contact-me';
import { useFormState } from 'react-dom';

import { SubmitButton } from './submitButton';
import FormResultStatus from './form-result-status';
import { ContactMe as t } from '@/utils/resourceContent';
import Spinner from './spinner';

const initialState: ContactFormState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    resetKey: '',
    resetError: 0,
};

export function ContactMeForm() {
    const [actionResult, formAction] = useFormState(
        createContactMe,
        initialState,
    );
    const {
        result,
        errors,
        name,
        email,
        subject,
        message,
        resetKey,
        resetError,
    } = actionResult;

   
    const errorClass = 'border border-red-700 bg-red-50';

    return (
        <form action={formAction} key={resetKey}>
            <div className="relative">
                <div className="mb-5 flex flex-col">
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        {t.nameLbl}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={name}
                        className={`${errors?.name ? errorClass : ''}`}
                        placeholder={t.namePlaceholder}
                        aria-describedby={
                            errors?.name ? 'name-error' : undefined
                        }
                    />
                    {errors?.name ? (
                        <span
                            id="name-error"
                            className="text-sm text-red-700"
                            role="alert"
                            aria-live="assertive"
                        >
                            {errors?.name[0]}
                        </span>
                    ) : null}
                </div>
                <div className="mb-5 flex flex-col">
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        {t.emailLbl}
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={email}
                        className={`${errors?.email ? errorClass : ''}`}
                        placeholder={t.emailPlaceholder}
                        aria-describedby={
                            errors?.email ? 'email-error' : undefined
                        }
                    />
                    {errors?.email ? (
                        <span
                            id="email-error"
                            className="text-sm text-red-700"
                            role="alert"
                            aria-live="assertive"
                        >
                            {errors.email[0]}
                        </span>
                    ) : null}
                </div>
                <div className="mb-5 flex flex-col">
                    <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        {t.subjectLbl}
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        defaultValue={subject}
                        className={`${errors?.subject ? errorClass : ''}`}
                        aria-describedby={
                            errors?.subject ? 'subject-error' : undefined
                        }
                    />
                    {errors?.subject ? (
                        <span
                            id="subject-error"
                            className="text-sm text-red-700"
                            role="alert"
                            aria-live="assertive"
                        >
                            {errors.subject[0]}
                        </span>
                    ) : null}
                </div>
                <div className="mb-5 flex flex-col">
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        defaultValue={message}
                        rows={2}
                        cols={50}
                        className={` ${errors?.message ? errorClass : ''}`}
                        aria-describedby={
                            errors?.message ? 'message-error' : undefined
                        }
                    />
                    {errors?.message ? (
                        <span
                            id="message-error"
                            className="text-sm text-red-700"
                            role="alert"
                            aria-live="assertive"
                        >
                            {errors.message[0]}
                        </span>
                    ) : null}
                </div>
                <Spinner />
            </div>
            {result ? (
                <FormResultStatus
                    key={resetError}
                    type={result.type}
                    message={result.message}
                />
            ) : null}
            <SubmitButton label="Submit" />
        </form>
    );
}
