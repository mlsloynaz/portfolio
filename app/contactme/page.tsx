import { ContactMeForm } from "@/components/contact-me";
import {ContactMe as t} from  '@/utils/resourceContent';

export default function ContactMe() {
    return (
        <main className="flex flex-col p-4 md:px-28 w-full">
            <h1 className="text-3xl bg-stone-200 rounded-lg p-4 text-slate-900">{t.title}</h1>
            <div  className="py-8">
                <ContactMeForm />
            </div>
        </main>
    )
}