import { ContactMeForm } from "@/components/contact-me";
import {ContactMe as t} from  '@/utils/resourceContent';

export default function ContactMe() {
    return (
        <main className="content-page">
            <h2 className="text-3xl bg-[#F6F1E7] rounded-lg p-4 text-slate-900">{t.title}</h2>
            <div  className="py-8">
                <ContactMeForm />
            </div>
        </main>
    )
}