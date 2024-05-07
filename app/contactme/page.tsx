import { ContactMeForm } from "@/components/contact-me";

export default function ContactMe() {
    return (
        <div className="flex flex-col p-4 md:px-28 w-full">
            <p className="text-3xl bg-stone-200 rounded-lg p-4 text-slate-900">Contact Me</p>
            <div  className="py-8">
                <ContactMeForm />
            </div>
        </div>
    )
}